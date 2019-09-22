<img src="https://img.techpowerup.org/190918/react-icon-logo.png" width="120" alt="react-multiple-icons">

# [react-multiple-icons](https://salmanmehmood.github.io/ReactIconsDocumentation/)

[![version](https://img.shields.io/badge/version-1.0.0-gree.svg)](https://www.npmjs.com/package/react-multiple-icons)

Include popular icons in your React projects easily with `react-multiple-icons`,
which utilizes ES6 imports that allows you to include only the icons that your project is using.

## Installation

```bash
npm install react-multiple-icons --save
```

## Configure CDN(s)

Add CDN link(s) of desired icons system in your projects public/index.html.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    ...
    <link
      href="https://use.fontawesome.com/releases/v5.0.4/css/all.css"
      rel="stylesheet"
    />
    <!-- font awesome link end -->
    <!-- material design link -->
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
    <!-- material design link end -->

    <!-- feather icons -->
    <link
      href="assets/vendors/feather-icons/feather.css"
      rel="stylesheet"
      type="text/css"
    />
    <!-- feather link end -->
    <!-- Linea Icons -->
    <link
      href="assets/vendors/linea-icons/styles.css"
      rel="stylesheet"
      type="text/css"
    />
    <!-- Linea Icons link end  -->
    <!-- IonIcons link -->
    <link
      href="https://unpkg.com/ionicons@4.2.2/dist/css/ionicons.min.css"
      rel="stylesheet"
    />
    <!-- IonIcons link end  -->
  </head>
```

## Basic Usage

```jsx
import Icon from "react-multiple-icons";

class Question extends React.Component {
  render() {
    return (
      <h3>
        {" "}
        Lets go for a <Icon iconName="fa fa-industry" />?{" "}
      </h3>
    );
  }
}
```

If you want to use material design icons follow this.

```
<ReactIcons
    iconName="material-icons"
    iconStyle="custom-style"
    className="zoom_out_map"
/>
```

```
.custom-style {
	font-size: 1.2rem;
	color: "green"
}
```

Any customize style can be passed in like

```jsx
<Icon iconName="fa fa-industry" iconStyle="custom-style" />
```

[View the documentation](https://salmanmehmood.github.io/ReactIconsDocumentation/) for further usage examples and how to use icons from other packages.
_NOTE_: each Icon package has it's own subfolder under `react-icons` you import from.

## Supported Icons list

### Font Awesome

### Material Design

### Ionicons

### Linea Basic Icons

### Feather Icons

You can add more icons by submitting pull requests or creating issues.

| key       | default   | memo                         |
| --------- | --------- | ---------------------------- |
| size      | 1em       |
| iconStyle | undefined | can overwrite size and color |
