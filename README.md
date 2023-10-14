# AngularBarberShop

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Diagrama de classe Cliente Barbearia

```mermaid
classDiagram
    class Cliente {
        + id: PK
        + cpf: PK
        nome
        idade
        sexo
    }

    class ContatoCliente {
        + id_cliente: FK
        email
        telefone
    }

    class EnderecoCliente {
        + id_cliente: FK
        logradouro
        numero
        bairro
        complemento
        cep
        cidade
        estado
        endereco_principal
    }

    Cliente "1" -- "n" ContatoCliente : possui
    Cliente "1" -- "n" EnderecoCliente : possui

```
# Diagrama de classe Barbeiro
```mermaid
classDiagram
    class Barbeiro {
        + id_barbeiro: PK
        cnpj
        nome
    }

    class ServicoBarbeiro {
        + id_servico: PK
        fk id_barbeiro: FK
        tipo_servico: string[]
    }

    class HorarioAtendimento {
        + id_horario: PK
        fk id_barbeiro: FK
        dia_semana: string[]
        horario: string[]
    }

    Barbeiro "1" -- "n" ServicoBarbeiro : presta
    Barbeiro "1" -- "n" HorarioAtendimento : possui

```
