Feature: Register User
  Eu coomo cliente
  Quero me cadastrar na aplicação
  Para fazer um pedido de compras

  Background: Access register
    Given I am register screen
  Scenario: Campo nome vazio    
    When I click on Register
    Then I see message "E-mail inválido." on register  

  Scenario: Campo e-mail vazio
    And I fill "name"
    When I click on Register
    Then I see message "O campo e-mail deve ser preenchido corretamente" on register

  Scenario: Campo e-mail inválido
    And I fill "name"
    And I fill e-mail "invalidEmail"
    When I click on Register
    Then I see message "O campo e-mail deve ser preenchido corretamente" on register

  Scenario: Campo senha vazio
    And I fill "name"
    And I fill e-mail "email"
    When I click on Register
    Then I see message "O campo senha deve ter pelo menos 6 dígitos" on register
  
  Scenario: Campo senha inválido
    And I fill "name"
    And I fill e-mail "email"
    An I fill password "123"
    When I click on Register
    Then I see message "O campo senha deve ter pelo menos 6 dígitos" on register

  Scenario: Cadastro de usuário com sucesso
    And I fill my datas of register
    When I click on Register
    Then I see message success message on register