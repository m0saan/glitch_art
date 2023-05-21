# glitch_art

[![Github Actions Status](https://github.com/m0saan/glitch-art/workflows/Build/badge.svg)](https://github.com/m0saan/glitch-art/actions/workflows/build.yml)
Glitch art is a futuristic and aesthetic code theme that is inspired by the beauty of digital glitches. It features a bold and vibrant color palette that is sure to turn heads.

## Requirements

- JupyterLab >= 4.0.0b0

## Installation
1. Install Dependencies: Install the extension's dependencies using npm:

   ```bash
   npm install
   ```

2. Build the Extension: Build the extension using npm:

   ```bash
   npm run build
   ```

   This command bundles the necessary files and prepares the extension for use.

3. Activate the Extension: Activate your extension using the following command:

   ```bash
   jupyter labextension link .
   ```

   This command creates a symbolic link to your extension, allowing JupyterLab to recognize and use it.

4. I if that does not work, try:

   ```bash
   pip install -e "."
   ```

   JupyterLab will now use your custom extension. You can enable and use the features provided by your extension within JupyterLab.

That's it! You've created a JupyterLab extension using a Cookiecutter template. You can further customize and develop your extension by modifying the generated files according to your requirements.

## Contributing

### Development install

Note: You will need NodeJS to build the extension package.

The `jlpm` command is JupyterLab's pinned version of
[yarn](https://yarnpkg.com/) that is installed with JupyterLab. You may use
`yarn` or `npm` in lieu of `jlpm` below.

```bash
# Clone the repo to your local environment
# Change directory to the glitch_art directory
# Install package in development mode
pip install -e "."
# Link your development version of the extension with JupyterLab
jupyter labextension develop . --overwrite
# Rebuild extension Typescript source after making changes
jlpm build
```

You can watch the source directory and run JupyterLab at the same time in different terminals to watch for changes in the extension's source and automatically rebuild the extension.

```bash
# Watch the source directory in one terminal, automatically rebuilding when needed
jlpm watch
# Run JupyterLab in another terminal
jupyter lab
```

With the watch command running, every saved change will immediately be built locally and available in your running JupyterLab. Refresh JupyterLab to load the change in your browser (you may need to wait several seconds for the extension to be rebuilt).

By default, the `jlpm build` command generates the source maps for this extension to make it easier to debug using the browser dev tools. To also generate source maps for the JupyterLab core extensions, you can run the following command:

```bash
jupyter lab build --minimize=False
```

### Development uninstall

```bash
pip uninstall glitch_art
```

In development mode, you will also need to remove the symlink created by `jupyter labextension develop`
command. To find its location, you can run `jupyter labextension list` to figure out where the `labextensions`
folder is located. Then you can remove the symlink named `Glitch-art` within that folder.

### Packaging the extension

See [RELEASE](RELEASE.md)
