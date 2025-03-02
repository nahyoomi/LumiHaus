<a name="readme-top"></a>

<div align="center">

[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<a href="https://github.com/nahyoomi/LumiHaus">
  <img width="300px" src="/src/assets/icons/Logo.svg" alt="Logo" width="800" />
</a>

## Lumi Haus Catalog

This project is a simplified web application to manage a product catalog.\
[Figma Design](https://www.figma.com/design/uB2eqpBuZohpVB4FmDxYKi/Software-Challenge?node-id=0-1&p=f&t=cEMTLMIQMuV0aKnr-0) · [Report an issue](https://github.com/nahyoomi/LumiHaus/issues) · [Suggest something](https://github.com/nahyoomi/LumiHaus/issues)

</div>

<details>
<summary>Summary</summary>

- [Lumi Haus Catalog](#lumi-haus-catalog)
- [Main features](#main-features)
- [Getting started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [🛠️ Stack](#️-stack)

</details>

## Main features

- **Public Section**: Displays a list of products from a remote API, allows users to add items to a shopping cart, and shows a cart page with selected products, quantities, and total price.
- **Private Section**: Includes user login with email and password, JWT authentication for secure routes, product management (CRUD), and form validations with clear error messages.
- **Error Handling**: Proper error messages for authentication and API call failures.
- **Performance Optimizations**: Using React hooks, lazy loading with React.lazy and Suspense, efficient product management (CRUD), and minimizing re-renders with pagination or lazy loading for the product list.


<p align="right">(<a href="#readme-top">Back to top</a>)</p>

## Getting started

### Prerequisites

- NVM (recommended to ensure the Node version) see [official documentation](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)

  ```sh
  nvm use
  # o
  nvm use <version>
  ```

  > if you want to automate the process, you can create a script by following the [official documentation](https://github.com/nvm-sh/nvm?tab=readme-ov-file#calling-nvm-use-automatically-in-a-directory-with-a-nvmrc-file)

<details>
	<summary>Small automation script</summary>
	
- Linux/MacOS:
	```sh
	# .bashrc | .zshrc | any configuration file
	# small script to change the version when entering the directory
	cd() {
  builtin cd "$@"
		if [[ -f .nvmrc ]]; then
			nvm use > /dev/null
			# if you want it to show the version
			nvm use
		fi
	}
	```

- Windows:

  ```powershell
  # $PROFILE
  function Change-Node-Version {
  	param($path)
  	& Set-Location $path
  	$pwd = pwd
  	if ( Test-Path "$pwd\\.nvmrc" ) {
  		$version = Get-Content .nvmrc
  		nvm use $version
  	}
  }
  New-Alias -Name cd -Value Change-Node-Version -Force -Option AllScope
  ```

  </details>

- PNPM (it is our recommendation due to its efficiency and speed)

  ```sh
  npm install -g pnpm
  ```

- o NPM

  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repository

   ```sh
   git clone https://github.com/nahyoomi/LumiHaus.git
   cd lumi-haus
   ```

2. Instala los paquetes de NPM

   ```sh
   npm install
   ```

3. Run the project
	 - Runs the app in development mode. Open http://localhost:3000 in the browser.
   ```sh
   npm start
   ```
   - Builds the app for production into the build folder.
   ```sh
   npm run build
   ```
  - Runs the tests using Vitest in interactive watch mode.
   ```sh
   npm test
   ```
  - Executes tests once without watch mode.
   ```sh
   npm run test:run
   ```
  - Runs tests with coverage reporting enabled.
   ```sh
   npm run test:coverage
   ```

4. API and Authentication
  > [!NOTE]
  > This application uses Platzi's Fake API to manage products and authentication. You can find more details about the API in its [official documentation](https://fakeapi.platzi.com/en/about/introduction/).

  API Usage
  - **Products**: The GET, POST, PUT, and DELETE operations on products are performed via the API. When the application starts, requests are made to the API to retrieve the product list and manage product data (create, edit, and delete) from the private section.
  - **Authentication**: Authentication is simulated using Platzi's Fake API, which provides a set of test users. To access the private admin section, use one of the following test accounts:
    - **User 1**:
       - email: admin@mail.com
       - password: admin123 
    - **User 2**:
       - email: john@mail.com
       - password: changeme 


<p align="right">(<a href="#readme-top">Back to top</a>)</p>


## 🛠️ Stack

- [![React][react-badge]][react-url] - The library for web and native user interfaces.
- [![Typescript][typescript-badge]][typescript-url] - JavaScript with syntax for types.
- [![Tailwind CSS][tailwind-badge]][tailwind-url] - A utility-first CSS framework for rapidly building custom designs.

<p align="right">(<a href="#readme-top">Back to top</a>)</p>

[react-url]: https://react.dev/
[typescript-url]: https://www.typescriptlang.org/
[tailwind-url]: https://tailwindcss.com/
[react-badge]: https://shields.io/badge/react-black?logo=react&style=for-the-badge
[typescript-badge]: https://img.shields.io/badge/Typescript-007ACC?style=for-the-badge&logo=typescript&logoColor=white&color=blue
[tailwind-badge]: https://img.shields.io/badge/Tailwind-ffffff?style=for-the-badge&logo=tailwindcss&logoColor=38bdf8
[forks-shield]: https://img.shields.io/github/forks/nahyoomi/LumiHaus.svg?style=for-the-badge
[forks-url]: https://github.com/nahyoomi/LumiHaus/network/members
[stars-shield]: https://img.shields.io/github/stars/nahyoomi/LumiHaus.svg?style=for-the-badge
[stars-url]: https://github.com/nahyoomi/LumiHaus/stargazers
[issues-shield]: https://img.shields.io/github/issues/nahyoomi/LumiHaus.svg?style=for-the-badge
[issues-url]: https://github.com/nahyoomi/LumiHaus/issues
