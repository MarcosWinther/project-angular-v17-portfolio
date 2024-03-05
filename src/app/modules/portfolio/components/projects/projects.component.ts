import { Component, inject, signal } from '@angular/core';

// Material
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

// Interface
import { IProjects } from '../../interface/IProjects.interface';

// Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

// Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/project-to-do-list.png',
      alt: 'Projeto Angular v.17 To Do List',
      title: 'Projeto Angular v.17: To Do List',
      width: '100px',
      height: '51px',
      description: `
        <p>Projeto To Do List utilizando o framework Angular versão 17.</p>
        <p>Este projeto é proposto pelo expert Dener Troquatte no curso de Angular na plataforma UDEMY.</p>
      `,
      links: [
        {
          name: 'Conheça o projeto To Do list',
          href: 'https://github.com/MarcosWinther/project-angular-v17-to-do-list',
        }
      ]
    },
    {
      src: 'assets/img/projects/project-scooby.png',
      alt: 'Projeto Angular Quiz - Scooby-Doo',
      title: 'Projeto Angular Quiz - Scooby-Doo',
      width: '100px',
      height: '96px',
      description: `
        <p>Desafio de projeto Angular Quiz proposto pelo professor Felipe Aguiar da plataforma educacional DIO.</p>
      `,
      links: [
        {
          name: 'Conheça o projeto quiz do Scooby-Doo',
          href: 'https://github.com/MarcosWinther/angular-project-quiz-scooby-doo',
        }
      ]
    },
    {
      src: 'assets/img/projects/project-ratatouille-blog.png',
      alt: 'Projeto Angular Blog - Filme Ratatouille',
      title: 'Projeto Angular Blog - Filme Ratatouille',
      width: '100px',
      height: '68px',
      description: `
        <p>Desafio de projeto Angular com o objetivo de criar um blog.</p>
        <p>Este projeto é proposto como projeto de portfólio pelo professor Felipe Aguiar da plataforma educacional DIO.</p>
      `,
      links: [
        {
          name: 'Conheça o projeto site blog do filme Ratatouille',
          href: 'https://github.com/MarcosWinther/project-angular-ratatouille-movie',
        }
      ]
    },
    {
      src: 'assets/img/projects/project-pokedex.png',
      alt: 'Projeto Angular Pokedex',
      title: 'Projeto Angular Pokedex',
      width: '100px',
      height: '101px',
      description: `
        <p>Projeto Pokedex com Angular e SCSS desenvolvido no curso de Angular ministrado pelo expert Dener Troquatte na plataforma UDEMY.</p>
      `,
      links: [
        {
          name: 'Conheça o projeto Pokedex',
          href: 'https://github.com/MarcosWinther/project-pokedex-angular-scss',
        }
      ]
    },
    {
      src: 'assets/img/projects/project-game-sakura-card-captors.png',
      alt: 'Projeto jogo: Sakura Card Captors | Jo-ken-po Edition com HTML, CSS e JS',
      title: 'Projeto jogo: Sakura Card Captors | Jo-ken-po Edition com HTML, CSS e JS',
      width: '100px',
      height: '100px',
      description: `
        <p>Desafio de projeto proposto pelo expert Felipe Aguiar da plataforma da DIO (Digital Innovation One).</p>
        <p>O objetivo desse projeto é criar um jogo Jo-Ken-po com HTML, CSS e JavaScript.</p>
        <p>O tema escolhido do jogo é sobre o anime Sakura Card Captors.</p>
      `,
      links: [
        {
          name: 'Conheça o projeto jogo: Sakura Card Captors',
          href: 'https://github.com/MarcosWinther/card-game-with-html-css-js',
        }
      ]
    },
    {
      src: 'assets/img/projects/project-detona-ralph-game.png',
      alt: 'Projeto Jogo Detona Ralph',
      title: 'Projeto Jogo Detona Ralph',
      width: '100px',
      height: '97px',
      description: `
        <p>Projeto de jogo do desafio de projeto proposto pelo expert Felipe Aguiar da plataforma da DIO (Digital Innovation One).</p>
        <p>O objetivo desse projeto é criar um jogo do Detona Ralph com HTML, CSS e JavaScript.</p>
      `,
      links: [
        {
          name: 'Conheça o projeto jogo: Detona Ralph',
          href: 'https://github.com/MarcosWinther/card-game-with-html-css-js',
        }
      ]
    },
    {
      src: 'assets/img/projects/project-game-piano.png',
      alt: 'Projeto Jogo Piano',
      title: 'Projeto Jogo Piano',
      width: '100px',
      height: '47px',
      description: `
        <p>Desafio de projeto proposto pelo expert Felipe Aguiar da plataforma da DIO (Digital Innovation One).</p>
        <p>O objetivo desse projeto é criar um jogo simulando um piano utilizando HTML, CSS e JavaScript.</p>
      `,
      links: [
        {
          name: 'Conheça o projeto jogo: Piano Simulator',
          href: 'https://github.com/MarcosWinther/game-piano-simulator-html-css-js',
        }
      ]
    },
    {
      src: 'assets/img/projects/project-memory-game.png',
      alt: 'Projeto: Jogo da Memória com HTML, CSS e JS',
      title: 'DProjeto: Jogo da Memória com HTML, CSS e JS',
      width: '100px',
      height: '58px',
      description: `
        <p>Desafio de projeto proposto pelo expert Felipe Aguiar da plataforma da DIO (Digital Innovation One).</p>
        <p>O objetivo desse projeto é criar um Jogo da Memória utilizando HTML, CSS e JavaScript.</p>
      `,
      links: [
        {
          name: 'Conheça o projeto do jogo da memória',
          href: 'https://github.com/MarcosWinther/memory-game-html-css-js',
        }
      ]
    },
    {
      src: 'assets/img/projects/project-memory-game.png',
      alt: 'Projeto: Jogo da Memória com HTML, CSS e JS',
      title: 'Projeto: Jogo da Memória com HTML, CSS e JS',
      width: '100px',
      height: '58px',
      description: `
        <p>Desafio de projeto proposto pelo expert Felipe Aguiar da plataforma da DIO (Digital Innovation One).</p>
        <p>O objetivo desse projeto é criar um Jogo da Memória utilizando HTML, CSS e JavaScript.</p>
      `,
      links: [
        {
          name: 'Conheça o projeto do jogo da memória',
          href: 'https://github.com/MarcosWinther/memory-game-html-css-js',
        }
      ]
    },
    {
      src: 'assets/img/projects/mario.png',
      alt: 'Projeto JS: Criando um Sistema de Reconhecimento de Voz para Aprender Animais em Inglês',
      title: 'Projeto JS: Criando um Sistema de Reconhecimento de Voz para Aprender Animais em Inglês',
      width: '90px',
      height: '112px',
      description: `
        <p>Projeto extra da Formação JavaScript Developer, ministrado pelo Felipe Aguiar da plataforma DIO.</p>
        <p>O objetivo desse projeto é criar um Sistema de Reconhecimento de Voz para Aprender alguns animais em Inglês.</p>
      `,
      links: [
        {
          name: 'Conheça o projeto de Sistema de Reconhecimento de Voz para Aprender Animais em Inglês',
          href: 'https://github.com/MarcosWinther/project-html-css-js-learning-animals-in-english',
        }
      ]
    },
    {
      src: 'assets/img/projects/project-clone-youtube.png',
      alt: 'Projeto CSS: Clonando a Página do Youtube com CSS',
      title: 'Projeto CSS: Clonando a Página do Youtube com CSS',
      width: '99px',
      height: '56px',
      description: `
        <p>Projeto de HMTL e CSS de Clone da página do Youtube utilizando Flexbox.</p>
        <p>Esse projeto foi proposto pela expert Michele Ambrosio da plataforma educacional DIO na Formação CSS Developer.</p>
      `,
      links: [
        {
          name: 'Conheça o projeto do clone da página do Youtube',
          href: 'https://github.com/MarcosWinther/project-css-dio-clone-youtube',
        }
      ]
    },
    {
      src: 'assets/img/projects/project-clone-discord.png',
      alt: 'Projeto CSS: Construindo um Layout Responsivo Para o Site do Discord Com CSS',
      title: 'Projeto CSS: Construindo um Layout Responsivo Para o Site do Discord Com CSS',
      width: '100px',
      height: '100px',
      description: `
        <p>Projeto de HMTL e CSS do clone da página do Discord usando os conceitos de responsividade e mobile first.</p>
        <p>Esse projeto foi proposto pela expert Michele Ambrosio da plataforma educacional DIO na Formação CSS Developer.</p>
      `,
      links: [
        {
          name: 'Conheça o projeto do clone do site Discord',
          href: 'https://github.com/MarcosWinther/project-html-css-clone-site-discord',
        }
      ]
    },
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }

}
