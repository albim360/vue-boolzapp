const { createApp } = Vue
const app = createApp({
  data() {
    return {
      activeIndex: null, 
      contacts: [
        {
          name: 'Psicologo',
          avatar: './img/psicologo.jpg',
          visible: true,
          messages: [
            {
              date: '22/02/2023 10:45:00',
              message: 'Vorrei una seduta',
              status: 'sent'
            },
            {
              date: '20/02/2023 10:46:00',
              message: 'Ripijatiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii',
              status: 'received'
            }
          ]
        },
        {
          name: 'Psicologo',
          avatar: './img/psicologo.jpg',
          visible: true,
          messages: [
            {
              date: '22/02/2023 10:45:00',
              message: 'Vorrei una seduta',
              status: 'sent'
            },
            {
              date: '20/02/2023 10:46:00',
              message: 'Ripijatiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii',
              status: 'received'
            }
          ]
        },
        {
          name: 'Psicologo',
          avatar: './img/psicologo.jpg',
          visible: true,
          messages: [
            {
              date: '22/02/2023 10:45:00',
              message: 'Vorrei una seduta',
              status: 'sent'
            },
            {
              date: '20/02/2023 10:46:00',
              message: 'Ripijatiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii',
              status: 'received'
            }
          ]
        },
        {
          name: 'Psicologo',
          avatar: './img/psicologo.jpg',
          visible: true,
          messages: [
            {
              date: '22/02/2023 10:45:00',
              message: 'Vorrei una seduta',
              status: 'sent'
            },
            {
              date: '20/02/2023 10:46:00',
              message: 'Ripijatiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii',
              status: 'received'
            }
          ]
        },
        {
          name: 'Psicologo',
          avatar: './img/psicologo.jpg',
          visible: true,
          messages: [
            {
              date: '22/02/2023 10:45:00',
              message: 'Vorrei una seduta',
              status: 'sent'
            },
            {
              date: '20/02/2023 10:46:00',
              message: 'Ripijatiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii',
              status: 'received'
            }
          ]
        },
        {
          name: 'Giulia',
          avatar: './img/dogegg.jpg',
          visible: true,
          messages: [
            {
              date: '19/02/2023 15:00:00',
              message: 'Ciao, mi puoi aiutare con il mio nuovo progetto?',
              status: 'received'
            },
            {
              date: '19/02/2023 16:00:00',
              message: 'Certo, fammi sapere cosa ti serve',
              status: 'sent'
            },
            {
              date: '19/02/2023 16:30:00',
              message: 'Grazie mille, sei sempre disponibile!',
              status: 'received'
            }
          ]
        },
        {
          name: 'Luca',
          avatar: './img/wut.jpg',
          visible: true,
          messages: [
            {
              date: '18/02/2023 10:00:00',
              message: 'Ciao, come va?',
              status: 'received'
            },
            {
              date: '18/02/2023 10:30:00',
              message: 'Sto bene, grazie! E tu?',
              status: 'sent'
            },
            {
              date: '18/02/2023 11:00:00',
              message: 'Anch\'io grazie, Che programmi hai per oggi?',
              status: 'received'
            },
            {
              date: '18/02/2023 11:30:00',
              message: 'Niente di particolare, forse andrò a fare una passeggiata, Tu?',
              status: 'sent'
            }
          ]
        }
      ],
    };
  },
  methods: {
    setActive(index) {
      // aggiorna l'indice dell'elemento attivo
      this.activeIndex = index;
    },
  },
}).mount('#app');
