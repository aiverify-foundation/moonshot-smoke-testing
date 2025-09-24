import pytest

from util import *
import subprocess
from dotenv import load_dotenv
import random

load_dotenv()  # Load environment variables from .env file

OPENAI_TOKEN = os.getenv('OPENAI_TOKEN')
MOON_V1_CLI_DIR = os.getenv('MOON_V1_CLI_DIR')

def assert_run_benchmark_outcome(output_lines):
    output_lines = [line.replace(" ", "") for line in output_lines if line.strip()]
    print("output_lines: [\n", "\n\t".join(output_lines), "\n]")
    assert any("File written".replace(" ", "") in line for line in output_lines)
    assert any("successfully at:".replace(" ", "") in line for line in output_lines)
    assert any("data/results/smoke-test-my-benc".replace(" ", "") in line for line in output_lines)

def assert_run_red_teaming_outcome(output_lines):
    output_lines = [line.replace(" ", "") for line in output_lines if line.strip()]
    print("output_lines: [\n", "\n\t".join(output_lines), "\n]")
    assert any("File written".replace(" ", "") in line for line in output_lines)
    assert any("successfully at:".replace(" ", "") in line for line in output_lines)
    assert any("data/results/smoke-tes".replace(" ", "") in line for line in output_lines)

def test_cli_smoke_test():
    # Smoke Test for Run Benchmarking Test Config Command
    # Generate a random number between 0 and 999,999,999 (inclusive)
    random_number = int(random.random() * 1000000000)
    dataset_module = "s3://moonshot-cicd-smoketest/data/dataset-mini/prompt_injection_payload_splitting"
    prefix = "s3://moonshot-cicd-smoketest/data/dataset-mini/"
    dataset_source = "s3-" + dataset_module[len(prefix):]
    connector_name = "my-gpt-4o-mini"
    nameOfRunnerName = "smoke-test-my-benchmarking-" + connector_name + "-" + dataset_source + "-" + str(random_number)
    test_config_name = "qa-tests"
    metric_module = "refusal_adapter"

    # Test Config modification
    source_path = MOON_V1_CLI_DIR + "/data/test_configs/tests.yaml"
    copy_file(source_path)
    yaml_file_path = MOON_V1_CLI_DIR + "/data/test_configs/tests.yaml"
    updates = {
        test_config_name: [
            {
                "name": nameOfRunnerName,
                "type": "benchmark",
                "dataset": dataset_module,
                "metric": {
                    "name": metric_module}
            }
        ]
    }

    # Example usage
    replace_yaml_content(yaml_file_path, updates)

    commands = [
        "export OPENAI_API_KEY=" + OPENAI_TOKEN,
        "poetry run moonshot run " + nameOfRunnerName + " " + test_config_name + " " + connector_name + ""
    ]
    # Join commands with '&&' to ensure the next runs only if the previous succeeds
    full_command = "&&".join(commands)
    print(f"Running combined command: {full_command}")

    process = subprocess.Popen(
        full_command,
        shell=True,  # Allows for complex shell commands
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        stdin=subprocess.PIPE,
        text=True,
        cwd=str(MOON_V1_CLI_DIR),
    )
    print('Path:', str(MOON_V1_CLI_DIR))
    # Ensure process.stdin is not None
    if process.stdin is None:
        raise RuntimeError("Failed to create stdin for the subprocess")

    # Capture the output and errors
    stdout, stderr = process.communicate()

    print('Output:', stdout)
    # Split the output into lines
    output_lines = stdout.splitlines()

    # Test Config rollback
    source_path = MOON_V1_CLI_DIR + "/data/test_configs/copy_of_tests.yaml"
    destination_path = MOON_V1_CLI_DIR + "/data/test_configs/tests.yaml"
    copy_and_move_file(source_path, destination_path)

    # Assert Results
    assert_run_benchmark_outcome(output_lines)
    check_result_file_exists(MOON_V1_CLI_DIR + "/data/results/" + nameOfRunnerName + ".json")

    # Smoke Test for Run Red Teaming Test Config Command

    attack_module = "hallucination"
    connector_name = "my-gpt-4o-mini"
    nameOfRunnerName = "smoke-test-test_run_" + connector_name + "-" + attack_module + "-" + str(random_number)
    test_config_name = "qa-tests"
    metric_module = "refusal_adapter"

    # Test Config modification
    source_path = MOON_V1_CLI_DIR + "/data/test_configs/tests.yaml"
    copy_file(source_path)
    yaml_file_path = MOON_V1_CLI_DIR + "/data/test_configs/tests.yaml"
    updates = {
        test_config_name: [
            {
                "name": nameOfRunnerName,
                "type": "scan",
                "attack_module": {
                    "name": attack_module,
                    "params": {"max_prompts": 1,
                               "use_case":
                                   "This is a gaming chatbot. It will answer the top-selling games in US and Asia. It "
                                   "will give advice on what is the best"
                                   "game to play based on the user preference.",
                               "qns_type": "MCQ"}},
                "metric": {
                    "name": metric_module}
            }
        ]
    }

    # Example usage
    replace_yaml_content(yaml_file_path, updates)

    commands = [
        "export OPENAI_API_KEY=" + OPENAI_TOKEN,
        "poetry run moonshot run " + nameOfRunnerName + " " + test_config_name + " " + connector_name + ""
    ]
    # Join commands with '&&' to ensure the next runs only if the previous succeeds
    full_command = "&&".join(commands)
    print(f"Running combined command: {full_command}")

    process = subprocess.Popen(
        full_command,
        shell=True,  # Allows for complex shell commands
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        stdin=subprocess.PIPE,
        text=True,
        cwd=str(MOON_V1_CLI_DIR),
    )
    print('Path:', str(MOON_V1_CLI_DIR))
    # Ensure process.stdin is not None
    if process.stdin is None:
        raise RuntimeError("Failed to create stdin for the subprocess")

    # Capture the output and errors
    stdout, stderr = process.communicate()

    print('Output:', stdout)
    # Split the output into lines
    output_lines = stdout.splitlines()

    # Test Config rollback
    source_path = MOON_V1_CLI_DIR + "/data/test_configs/copy_of_tests.yaml"
    destination_path = MOON_V1_CLI_DIR + "/data/test_configs/tests.yaml"
    copy_and_move_file(source_path, destination_path)

    # Assert Results
    assert_run_red_teaming_outcome(output_lines)
    check_result_file_exists(MOON_V1_CLI_DIR + "/data/results/" + nameOfRunnerName + ".json")