# PEC5_Ej1_respuestas_teoria.md

## a) Quines són les principals diferències entre formularis dirigits per template i formularis reactius?
Els <ins>formularis dirigits per template</ins> la lògica està definida principalment en el propi template de l'*HTML*, emprant les directives *ngModel*, *ngForm*, etc. per establir la relació entre el model i la vista. <br>
En canvi, en els <ins>formularis reactius</ins> són generats per codi *Typescript* on s'ha de definir el formulari, els controladors i les validacions en l'arxiu *TypeScript*, proporcionant un major control.

Entre altres diferències podrien trobar que els formularis dirigits per template poden ser més fàcils d'usar per usuaris principiants, ja que són més fàcils d'entendre i usar (i al mateix temps, més ràpids i senzills), mentre que els formularis reactius són més complexos, però aporten a usuaris més avançats un major control, maneig i al mateix temps faciliten el *testing*. Cal dir també que ambdós tipus de formularis poden ser asíncrons o síncrons, però normalment se solen associar més els formularis dirigits per template com a síncrons i els formularis dirigits com asíncrons.

## b) Què són, per a què serveixen i com es fan servir les directives ngModel i ngModelChange?

Tant **ngModel** com **ngModelChange** són directives d'*Angular* dissenyades per facilitar la navegació de dades entre model i vista en els formularis.
- <ins>ngModel</ins>: és una directiva que proporciona un enllaç entre model i vista, emprant principalment en formularis per sincronitzar automàticament les dades entre elements i les propietats del model del component, simplificant la gestió dels formularis i actualitzant les dades entre la vista i component. Podem veure un petit exemple a continuació:

```html
<!-- Arxiu template HTML -->
<input [(ngModel)]="nombre" />
```

```ts
// Component TS
export class MiComponente {
  nombre: string;
}
```

- <ins>ngModelChange</ins> és un esdeveniment que s'emet quan canvia el valor associat a *ngModel*, permetent certes operacions (com crides a funcions) en resposta a aquest canvi. Podem veure un petit exemple a continuació:

```html
<!-- Arxiu template HTML -->
<input [ngModel]="nombre" (ngModelChange)="miFunction($event)" />
```

```ts
// Component TS
export class MiComponente {
  nombre: string;

  miFunction(value: string) {
    console.log('El valor es:', value);
  }
}
```

## c) Què són, quins són i per a què serveixen els estats als formularis dirigits per templates?

Com el seu nom indica, <ins>s'utilitzen per a tenir un coneixement sobre l'estat del control del formulari</ins>. Cada control, ja sigui un camp de text, un *checkbox* u altres, es poden trobar en diferents estats al llarg del cicle de vida del formulari, és per això que s'han de tractar internament per *Angular* per tal de proporcionar finalitats específiques.<br>
Podem trobar <ins>tres estats als formularis dirigits per templates</ins>:
- **Visitat** (*visited*): Si el control està en estat de *touched*, voldrà dir que l'usuari ha interactuat amb ell (fent *click* o escrivint, per exemple), en canvi, si el control està en *untouched*, voldrà dir que l'usuari no ha interactuat amb ell.
- **Canviat** (*changed*): Si el control està en estat de *dirty*, voldrà dir que el seu valor va canviar des de que el formulari es va carregar, en canvi, si el control està en *pristine*, voldrà dir que l'usuari no haurà interactuat amb ell (sent l'estat inicial).
- **Valid** (*valid*): Si el control està com *valid*, voldrà dir que el seu valor compleix les regles de validació establertes, mentre que si està com a *invalid* voldrà dir que incompleix les regles de validació definides.

|Control state|CSS class if True|CSS class if False|
|---|---|---|
|Visited|ng-touched|ng-untouched|
|Changed|ng-dirty|ng-pristine|
|Valid|ng-valid|ng-invalid|

Podem veure un exemple a continuació:
```html
<input [(ngModel)]="nombre" #meuInput="ngModel" />
<div *ngIf="meuInput.touched && meuInput.invalid">Camp invàlid.</div>
```

## d) Quins avantatges aporten els FormGroup a la composició de formularis?

Proporciona una forma d'agrupar i gestionar els estats d'alguns controls dins d'un formulari, de forma estructurada, jeràrquica i flexible. Al mateix temps, ens permet crear certes regles de validacions que poden involucrar a diferents controls dins del mateix *FormGroup* (podent crear validacions més complexes en múltiples camps) o també poder accedir a valors o estats més fàcilment dins del *FormGroup*, facilitant la manipulació o validació del seu conjunt.