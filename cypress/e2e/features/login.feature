Feature: Login
  Eu como cliente 
  Quero faer login na aplicação
  Para fazer um pedido de compra

  Scenario: Login com campo e-mail vazio
    Given I am on login screan
    When I click on Login
    Then I see the message "E-mail inválido."

  # Scenario: Login com campo senha vazio
  #   Given I am on login screan
  #   And I fill e-mail
  #   When I click on Login
  #   Then I see the message "Senha inválido."

  # Scenario: Login com sucesso
  #   Given I am on login screan
  #   And I fill my credencials
  #   When I click on Login
  #   Then I see success message