# PEC5_Ej4_respuestas_teoria.md

## a) Què són, per a què serveixen i com es fan servir FormControl, FormGroup i FormBuilder?

Tant *FormControl*, com *FormGroup* i *FormBuilder* serveixen per treballar amb formularis reactius. Dit això:
- <ins>FormControl</ins>: representa la informació relacionada amb un element de control dins del formulari, com un camp d'entrada *input* o un *checkbox*, el qual es sol emprar per rastrejar el valor de l'estat.

```ts
import { FormControl } from '@angular/forms';

const myInput = new FormControl('valor');
```

- <ins>FormGroup</ins>: representa un grup de controls del formulari, generalment associats amb un model i s'empra per rastrejar l'estat i els valors del grup de controls.

```ts
import { FormGroup, FormControl } from '@angular/forms';

const myInput = new FormGroup({
  username: new FormControl(''),
  password: new FormControl(''),
});
```

- <ins>FormBuilder</ins>: és una classe que simplifica la creació d'instàncies de *FormGroup* i *FormControl*, ajudant a reduir la quantitat de codi necessari per crear i configurar controls i grups de formularis.

```ts
import { FormBuilder } from '@angular/forms';

constructor(private fb: FormBuilder) {
  this.myForm = this.fb.group({
    username: [''],
    password: [''],
  });
}
```

## b) Cerca a la pàgina oficial d'Angular (o utilitza un recurs de O’Reilly) en què s'especifiquin tots els validadors que inclou Angular per ser utilitzats en els formularis reactius. Construïu una taula de resum d'aquests.

|Validador|Descripció|
|---|---|
|min|Requereix que el valor de control sigui igual o major al número proporcionat|
|max|Requereix que el valor de control sigui menor o igual al número proporcionat|
|required|Requereix que el control tingui un valor que no estigui buit (non-empty)|
|requiredTrue|Requereix que el valor de control sigui true (emprat normalment pels checkbox)|
|email|Requereix que el valor de control pasi un test de validació d'email|
|minLength|Requereix que la longitud del valor de control sigui major o igual que el número proporcionat|
|maxLength|Requereix que la longitud del valor de control sigui menor o igual que el número proporcionat|
|pattern|Requereix que el valor de control coincideixi amb un patró d'expressions regulars|
|nullValidator|validador que no realitza cap operació|
|compose|Composa diversos validadors en una única funció que retorna la unió dels mapes d'errors individuals al control proporcionat|
|composeAsync|Composa múltiples validacions asíncrones en una sola funció que retorna la unió d'un mapa d'error individual del control proporcionat|

Documentació d'Angular: *["Validators"](https://angular.io/api/forms/Validators "Validators")*.



## c) Què són, quins són i per a què serveixen els estats en els formularis reactius?

En els formularis reactius, els estats serveixen per oferir un seguiment en els canvis així com a validar el control. Existeixen tres de principals:
- **Visitat** (*visited*): Si el control està en estat de *touched*, voldrà dir que l'usuari ha interactuat amb ell (fent *click* o escrivint, per exemple), en canvi, si el control està en *untouched*, voldrà dir que l'usuari no ha interactuat amb ell.
- **Canviat** (*changed*): Si el control està en estat de *dirty*, voldrà dir que el seu valor va canviar des de que el formulari es va carregar, en canvi, si el control està en *pristine*, voldrà dir que l'usuari no haurà interactuat amb ell (sent l'estat inicial).
- **Valid** (*valid*): Si el control està com *valid*, voldrà dir que el seu valor compleix les regles de validació establertes, mentre que si està com a *invalid* voldrà dir que incompleix les regles de validació definides.