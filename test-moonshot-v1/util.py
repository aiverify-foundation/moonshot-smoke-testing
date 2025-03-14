import os
import yaml
import shutil
def check_result_file_exists(filepath):
    assert os.path.isfile(filepath), f"Error: File '{filepath}' does not exist."
def copy_file(file_path):
    # Get the file name and directory path
    directory, filename = os.path.split(file_path)

    # Create a new file name by appending "_copy" to the original file name
    new_filename = f"copy_of_{filename}"

    # Create the full path for the new file
    new_file_path = os.path.join(directory, new_filename)

    # Copy the file to the new location
    shutil.copy(file_path, new_file_path)

    print(f"File copied to: {new_file_path}")
def replace_yaml_content(file_path, new_data):
    """
    Replaces the entire content of a YAML file with new data.

    :param file_path: Path to the YAML file
    :param new_data: New data to replace the entire YAML content
    """
    with open(file_path, 'w') as file:
        yaml.safe_dump(new_data, file, default_flow_style=False)  # Write new content
def copy_and_move_file(source_path, destination_path):
    """
    Copies and moves a file to the specified destination.
    If the file already exists at the destination, it replaces it.

    :param source_path: Path to the source file.
    :param destination_path: Path to the destination file.
    """
    try:
        # Ensure the source file exists
        if not os.path.isfile(source_path):
            print(f"Error: Source file '{source_path}' does not exist.")
            return

        # Ensure the destination directory exists; create if necessary
        os.makedirs(os.path.dirname(destination_path), exist_ok=True)

        # Copy the file to the destination (overwrites if exists)
        shutil.copy2(source_path, destination_path)
        print(f"File copied to '{destination_path}' successfully.")

        # Move the file to the destination (replace if it already exists)
        shutil.move(source_path, destination_path)
        print(f"File moved to '{destination_path}' successfully.")
    except Exception as e:
        print(f"Error: {e}")