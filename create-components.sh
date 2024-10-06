#!/bin/bash

# Prompt the user to enter space-separated component names
read -p "Enter space-separated component names: " -a component_names

# Prompt the user to enter the name of the parent folder
read -p "Enter the parent folder name: " parent_folder

# Check if the parent folder exists
if [ -d "$parent_folder" ]; then
  echo "Parent folder '$parent_folder' already exists."
else
  echo "Parent folder '$parent_folder' does not exist. Creating it now..."
  mkdir -p "$parent_folder"
  echo "Parent folder '$parent_folder' created."
fi

# React component boilerplate template
generate_tsx_content() {
  component_name=$1
  echo "import React from 'react';
import styles from './${component_name}.module.scss';

interface ${component_name}Props {}

const ${component_name}: React.FC<${component_name}Props> = () => {
  return <div className={styles.${component_name}}>${component_name} Component</div>;
};

export default ${component_name};
"
}

# Loop through each component name provided
for component in "${component_names[@]}"; do
  # Create the folder for the component inside the parent folder
  component_folder="${parent_folder}/${component}"
  mkdir -p "$component_folder"

  # Create the ComponentName.tsx file with React boilerplate
  tsx_file="${component_folder}/${component}.tsx"
  generate_tsx_content "$component" > "$tsx_file"

  # Create the ComponentName.module.scss file
  scss_file="${component_folder}/${component}.module.scss"
  echo ".${component} {
  /* Add your styles here */
}" > "$scss_file"

  # Notify user
  echo "Created component: ${component} (folder, .tsx, and .module.scss) inside '$parent_folder'"
done

echo "All components created successfully!"
