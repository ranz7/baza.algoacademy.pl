# Welcome to baza.algoacademy.pl!

Start development with 

```sh
pnpm install
pnpm dev
```

## Editing the docs of baza.algoacademy.pl locally

The documentations for all baza.algoacademy.pl projects are hosted on [https://baza.algoacademy.pl](https://baza.algoacademy.pl)

Follow these steps if you want to edit the doc pages of a project (in these steps we'll assume it's [`c`](https://github.com/AlgoAcademyPL/SUBJECT_NAME)) and preview them locally :

1. Create a new directory called `algoacademy`.

```sh
mkdir algoacademy
```

2. Enter the directory and clone this repo and the repo of the project there.

```sh
cd algoacademy
git clone git@github.com:algoacademy/baza.algoacademy.pl.git
git clone git@github.com:algoacademy/SUBJECT_NAME.git
```

> [!NOTE]
> Your `algoacademy` directory should look like this:
>
> ```
> algoacademy/
>    |
>    +-- SUBJECT_NAME/
>    |
>    +-- baza.algoacademy.pl/
> ```

> [!WARNING]
> Make sure the name of the directory in your local file system matches the name of the project's repo.

3. Enter the `algoacademy/baza.algoacademy.pl` directory, install the dependencies and run the app in dev mode:

```sh
cd baza.algoacademy.pl
pnpm i
# The app will run on https://localhost:3000 by default
pnpm dev
```

4. Now you can visit http://localhost:3000/SUBJECT_NAME/latest/docs/overview in the browser and see the changes.

> [!NOTE]
> The updated pages need to be manually reloaded in the browser.

> [!WARNING]
> You will need to update the `docs/config.json` file (in the project's repo) if you add a new doc page!
