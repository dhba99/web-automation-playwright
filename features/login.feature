Feature: Inicio de sesion

  Scenario Outline: Inicio de sesion exitoso
    Given que estoy en la página de login
    When ingreso usuario "<user>" y contraseña "<password>"
    Then debo ver los productos

    Examples:
    |user         |password    |
    |standard_user|secret_sauce|

  Scenario: Inicio de sesion fallido
    Given que estoy en la página de login
    When ingreso usuario "locked_out_user" y contraseña "secret_sauce"
    Then aparece mensaje de error "Epic sadface: Sorry, this user has been locked out."