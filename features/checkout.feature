Feature: Compra de productos

  Scenario: Agregar producto a carrito desde la pagina de productos
    Given que estoy en la página de login
    When ingreso usuario "standard_user" y contraseña "secret_sauce"
    And añado el producto "Sauce Labs Backpack" al carrito
    And añado el producto "Sauce Labs Fleece Jacket" al carrito
    Then el total de items del carrito es "2"
    And el boton "Add to cart" cambia a "Remove" para el producto "Sauce Labs Backpack"
    And el boton "Add to cart" cambia a "Remove" para el producto "Sauce Labs Fleece Jacket"
  
  Scenario: Agregar producto a carrito desde la pagina de inicio
    Given que estoy en la página de login
    And ingreso usuario "standard_user" y contraseña "secret_sauce"
    And añado el producto "Sauce Labs Backpack" al carrito
    And añado el producto "Sauce Labs Fleece Jacket" al carrito
    When hago click al carrito de compras
    Then esta el producto "Sauce Labs Backpack" en el carrito
    And esta el producto "Sauce Labs Fleece Jacket" en el carrito
  
  Scenario: Agregar producto a carrito desde la pagina de inicio
    Given que estoy en la página de login
    And ingreso usuario "standard_user" y contraseña "secret_sauce"
    And añado el producto "Sauce Labs Backpack" al carrito
    And añado el producto "Sauce Labs Fleece Jacket" al carrito
    When hago click al carrito de compras
    And hago click al boton checkout
    And lleno el formulario de compra
    Then el monto total es correcto
    And hago click al boton finalizar
    And aparece el mensaje de compra exitosa