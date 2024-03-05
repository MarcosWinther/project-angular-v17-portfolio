import { Component, signal } from '@angular/core';

// Interface
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {

  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Técnico de Infraestrutura TI',
        p: 'Randstad | Nov 2021 - Fev 2023',
      },
      text: '<p>Terceirado. Contratado para prestar serviços para a empresa Lactalis do Brasil da cidade de Itumbiara - GO.</p><p>Responsável pela resolução de problemas de hardware e software, auxiliando os usuários que abriram o chamado de atendimento no sistema Hélix.</p><p>Principais tarefas: realizar instalações de programas, configurações de vpns (Checkpoint VPN), formatação de computadores Desktops e notebooks, instalação do Sistema Operacional (Windows 10) com as Normas Políticas da empresa, instalações e soluções de problemas de Pacote Office e configurações de compartilhamento de pastas, equipamentos e impressoras na rede. Para o acesso remoto são usadas as seguintes ferramentas: o TeamViewer, o compartilhamento de tela pelo Teams ou acesso pelo ip da máquina do usuário usando a ferramenta do Windows de Conexão Remota.</p>',
    },
    {
      summary: {
        strong: 'Técnico de Suporte em TI Interno',
        p: 'Core Telecom | Jan 2021 - Abr 2021',
      },
      text: '<p>Responsável pelo atendimento ao cliente realizando serviços relacionados a conexão à internet.</p><p>Principais tarefas: atender e realizar ligações para clientes, ativação e desbloqueio de conexão, resolver problemas relacionados a conexão via remoto, abrir e fechar ordens de serviços pelo sistema MK Solutions, atender clientes pelo WhatsApp no sistema MAXBOT, configurar roteadores, antenas e ONU e realizar limpeza no local de trabalho.</p>',
    },
    {
      summary: {
        strong: 'Analista de Suporte Técnico - Freenlace',
        p: '3AM It Services | Dez 2019 - Jan 2020',
      },
      text: '<p>Projeto de migração de sistemas, sendo contratado para prestar serviços para Usina BP Bunge de Itumbiara - GO.</p><p>Responsável pela migração dos sistemas dos computadores.</p><p>Principais tarefas: configuração de usuários nas máquinas (Desktops e notebooks), instalação dos programas usados na empresa por esses usuários, instalação do SAP Logon e CrossLink, formatação dos notebooks e Desktops e instalação da imagem do Windows 10 com as Normas Políticas da empresa BP Bunge.</p>',
    },
    {
      summary: {
        strong: 'Suporte ao Usuário - Estágio',
        p: 'Ministério Público do Estado de Goiás | Out 2017 - Out 2019',
      },
      text: '<p>Estágio CIEE.</p><p>Responsável pela resolução de problemas de hardware e software.</p><p>Principais tarefas: auxiliar os colaboradores nos problemas de hardware e software, realizar configurações de compartilhamento de equipamentos e impressoras na rede, fazer o controle de material de informática da empresa usando a planilha de Excel e quando necessário realizar atendimentos ao público e ligações externas para a Organização.</p>'
    }
  ]);

}
