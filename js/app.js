const scrollContainer = document.getElementsByClassName('chat__msg')[0];
scrollContainer.scrollTop = scrollContainer.scrollHeight;


const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      sentMessage: null,
      searchText: '',
      activeContact: {},
      activeIndex: 0,
      contacts: [
        {
          name: "Psicologo",
          avatar: "./img/psicologo.jpg",
          visible: true,
          messages: [
            {
              date: "2023-02-23 10:45:00",
              message: "Vorrei una seduta",
              status: "sent",
            },
            {
              date: "2023-02-23 10:46:00",
              message: "Ripijatiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
              status: "received",
            },
          ],
        },
        {
          name: "Psicologo",
          avatar: "./img/psicologo.jpg",
          visible: true,
          messages: [
            {
              date: "2023-02-23 10:45:00",
              message: "Vorrei una seduta",
              status: "sent",
            },
            {
              date: "2023-02-23 10:46:00",
              message: "Ripijatiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
              status: "received",
            },
          ],
        },
        {
          name: "Psicologo",
          avatar: "./img/psicologo.jpg",
          visible: true,
          messages: [
            {
              date: "2023-02-23 10:45:00",
              message: "Vorrei una seduta",
              status: "sent",
            },
            {
              date: "2023-02-23 10:46:00",
              message: "Ripijatiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
              status: "received",
            },
          ],
        },
        {
          name: "Psicologo",
          avatar: "./img/psicologo.jpg",
          visible: true,
          messages: [
            {
              date: "2023-02-23 10:45:00",
              message: "Vorrei una seduta",
              status: "sent",
            },
            {
              date: "2023-02-23 10:46:00",
              message: "Ripijatiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
              status: "received",
            },
          ],
        },
        {
          name: "Psicologo",
          avatar: "./img/psicologo.jpg",
          visible: true,
          messages: [
            {
              date: "2023-02-23 10:45:00",
              message: "Vorrei una seduta..",
              status: "sent",
            },
            {
              date: "2023-02-23 10:46:00",
              message: "Ripijatiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
              status: "received",
            },
          ],
        },  
        {
          name: "Giulia",
          avatar: "./img/dogegg.jpg",
          visible: true,
          messages: [
            {
              date: "2023-02-19 15:00:00",
              message: "Ciao, mi puoi aiutare con il mio nuovo progetto?",
              status: "received",
            },
            {
              date: "2023-02-19 16:00:00",
              message: "Certo, fammi sapere cosa ti serve",
              status: "sent",
            },
            {
              date: "2023-02-19 16:30:00",
              message: "Grazie mille, sei sempre disponibile!",
              status: "received",
            },
          ],
        },
        {
          name: "Elija",
          avatar: "./img/Profile_-_Stitch.webp",
          visible: true,
          messages: [
            {
              date: "2023-02-19 15:00:00",
              message: "Ho paura di Non riconoscerti mai piu Non credo piu alle favole Non credo piu alle favole",
              status: "received",
            },
            {
              date: "2023-02-19 16:00:00",
              message: "No",
              status: "sent",
            },
            {
              date: "2023-02-19 16:30:00",
              message: "Grazie mille, sei sempre disponibile!",
              status: "received",
            },
          ],
        },
        {
          name: "Giulia",
          avatar: "./img/dogegg.jpg",
          visible: true,
          messages: [
            {
              date: "2023-02-19 15:00:00",
              message: "Ciao, mi puoi aiutare con il mio nuovo progetto?",
              status: "received",
            },
            {
              date: "2023-02-19 16:00:00",
              message: "Certo, fammi sapere cosa ti serve",
              status: "sent",
            },
            {
              date: "2023-02-19 16:30:00",
              message: "Grazie mille, sei sempre disponibile!",
              status: "received",
            },
          ],
        },
        {
          name: "Giulia",
          avatar: "./img/dogegg.jpg",
          visible: true,
          messages: [
            {
              date: "2023-02-19 15:00:00",
              message: "Ciao, mi puoi aiutare con il mio nuovo progetto?",
              status: "received",
            },
            {
              date: "2023-02-19 16:00:00",
              message: "Certo, fammi sapere cosa ti serve",
              status: "sent",
            },
            {
              date: "2023-02-19 16:30:00",
              message: "Grazie mille, sei sempre disponibile!",
              status: "received",
            },
          ],
        },
        {
          name: "Giulia",
          avatar: "./img/dogegg.jpg",
          visible: true,
          messages: [
            {
              date: "2023-02-19 15:00:00",
              message: "Ciao, mi puoi aiutare con il mio nuovo progetto?",
              status: "received",
            },
            {
              date: "2023-02-19 16:00:00",
              message: "Certo, fammi sapere cosa ti serve",
              status: "sent",
            },
            {
              date: "2023-02-19 16:30:00",
              message: "Grazie mille, sei sempre disponibile!",
              status: "received",
            },
          ],
        },
        {
          name: "Giulia",
          avatar: "./img/dogegg.jpg",
          visible: true,
          messages: [
            {
              date: "2023-02-19 15:00:00",
              message: "Ciao, mi puoi aiutare con il mio nuovo progetto?",
              status: "received",
            },
            {
              date: "2023-02-19 16:00:00",
              message: "Certo, fammi sapere cosa ti serve",
              status: "sent",
            },
            {
              date: "2023-02-19 16:30:00",
              message: "Grazie mille, sei sempre disponibile!",
              status: "received",
            },
          ],
        },
        {
          name: "Giulia",
          avatar: "./img/dogegg.jpg",
          visible: true,
          messages: [
            {
              date: "2023-02-19 15:00:00",
              message: "Ciao, mi puoi aiutare con il mio nuovo progetto?",
              status: "received",
            },
            {
              date: "2023-02-19 16:00:00",
              message: "Certo, fammi sapere cosa ti serve",
              status: "sent",
            },
            {
              date: "2023-02-19 16:30:00",
              message: "Grazie mille, sei sempre disponibile!",
              status: "received",
            },
          ],
        },
        {
          name: "Giulia",
          avatar: "./img/dogegg.jpg",
          visible: true,
          messages: [
            {
              date: "2023-02-19 15:00:00",
              message: "Ciao, mi puoi aiutare con il mio nuovo progetto?",
              status: "received",
            },
            {
              date: "2023-02-19 16:00:00",
              message: "Certo, fammi sapere cosa ti serve",
              status: "sent",
            },
            {
              date: "2023-02-19 16:30:00",
              message: "Grazie mille, sei sempre disponibile!",
              status: "received",
            },
          ],
        },
        {
          name: "Giulia",
          avatar: "./img/dogegg.jpg",
          visible: true,
          messages: [
            {
              date: "2023-02-19 15:00:00",
              message: "Ciao, mi puoi aiutare con il mio nuovo progetto?",
              status: "received",
            },
            {
              date: "2023-02-19 16:00:00",
              message: "Certo, fammi sapere cosa ti serve",
              status: "sent",
            },
            {
              date: "2023-02-19 16:30:00",
              message: "Grazie mille, sei sempre disponibile!",
              status: "received",
            },
          ],
        },
        {
          name: "Giulia",
          avatar: "./img/dogegg.jpg",
          visible: true,
          messages: [
            {
              date: "2023-02-19 15:00:00",
              message: "Ciao, mi puoi aiutare con il mio nuovo progetto?",
              status: "received",
            },
            {
              date: "2023-02-19 16:00:00",
              message: "Certo, fammi sapere cosa ti serve",
              status: "sent",
            },
            {
              date: "2023-02-19 16:30:00",
              message: "Grazie mille, sei sempre disponibile!",
              status: "received",
            },
          ],
        },
        {
          name: "Giulia",
          avatar: "./img/dogegg.jpg",
          visible: true,
          messages: [
            {
              date: "2023-02-19 15:00:00",
              message: "Ciao, mi puoi aiutare con il mio nuovo progetto?",
              status: "received",
            },
            {
              date: "2023-02-19 16:00:00",
              message: "Certo, fammi sapere cosa ti serve",
              status: "sent",
            },
            {
              date: "2023-02-19 16:30:00",
              message: "Grazie mille, sei sempre disponibile!",
              status: "received",
            },
          ],
        },
        {
          name: "Giulia",
          avatar: "./img/dogegg.jpg",
          visible: true,
          messages: [
            {
              date: "2023-02-19 15:00:00",
              message: "Ciao, mi puoi aiutare con il mio nuovo progetto?",
              status: "received",
            },
            {
              date: "2023-02-19 16:00:00",
              message: "Certo, fammi sapere cosa ti serve",
              status: "sent",
            },
            {
              date: "2023-02-19 16:30:00",
              message: "Grazie mille, sei sempre disponibile!",
              status: "received",
            },
          ],
        },
        {
          name: "Giulia",
          avatar: "./img/dogegg.jpg",
          visible: true,
          messages: [
            {
              date: "2023-02-19 15:00:00",
              message: "Ciao, mi puoi aiutare con il mio nuovo progetto?",
              status: "received",
            },
            {
              date: "2023-02-19 16:00:00",
              message: "Certo, fammi sapere cosa ti serve",
              status: "sent",
            },
            {
              date: "2023-02-19 16:30:00",
              message: "Grazie mille, sei sempre disponibile!",
              status: "received",
            },
          ],
        },
        {
          name: "Giulia",
          avatar: "./img/dogegg.jpg",
          visible: true,
          messages: [
            {
              date: "2023-02-19 15:00:00",
              message: "Ciao, mi puoi aiutare con il mio nuovo progetto?",
              status: "received",
            },
            {
              date: "2023-02-19 16:00:00",
              message: "Certo, fammi sapere cosa ti serve",
              status: "sent",
            },
            {
              date: "2023-02-19 16:30:00",
              message: "Grazie mille, sei sempre disponibile!",
              status: "received",
            },
          ],
        },
        {
          name: "Luca",
          avatar: "./img/wut.jpg",
          visible: true,
          messages: [
            {
              date: "2023-02-18 10:00:00",
              message: "Ciao, come va?",
              status: "received",
            },
            {
              date: "2023-02-18 10:30:00",
              message: "Sto bene, grazie! E tu?",
              status: "sent",
            },
            {
              date: "2023-02-18 11:00:00",
              message: "Anch'io grazie, Che programmi hai per oggi?",
              status: "received",
            },
            {
              date: "2023-02-18 11:30:00",
              message:
                "Niente di particolare, forse andrò a fare una passeggiata, Tu?",
              status: "sent",
            },
          ],
        },
      ],
      inputValue: '',
    };
  },
  watch: {
    messages() {
      this.$nextTick(() => {
        const scrollContainer = this.$refs.scrollContainer;
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      });
    },
  },
  methods: {
    setActive(index) {
      this.activeIndex = index;
      this.activeContact = this.contacts[index];
      let messages = this.activeContact.messages;
      this.sentMessage = messages[messages.length - 1];
  
      // Aggiorna il nome del contatto e la foto del profilo
      const contactName = document.querySelector('.propic span');
      if (contactName) {
        contactName.innerText = this.activeContact.name;
      }
      const profilePic = document.querySelector('.propic img');
      if (profilePic) {
        profilePic.src = this.activeContact.avatar;
      }
    },    
    sendMessage() {
      if (!this.inputValue) {
        return;
      }
      const activeMessages = this.activeContact.messages;
      const newMessage = {
        message: this.inputValue,
        date: new Date(),
        status: 'sent'
      };
      activeMessages.push(newMessage);
      this.inputValue = '';
      setTimeout(() => {
        activeMessages.push({
          message: '...',
          date: new Date(),
          status: 'received'
        });
        setTimeout(() => {
          activeMessages.pop(); // per rimuovere i 3 puntini
          activeMessages.push({
            message: 'Ok, addio.',
            date: new Date(),
            status: 'received'
          });
        }, 1000);
      }, 1000);
    }    
  },
  directives: {
    "message-class": {
      mounted(el, binding) {
        const status = binding.value;
        el.classList.add(status === "sent" ? "send" : "receive");
      },
    },
  },
  computed: {
    filteredContacts() {
      return this.contacts.filter(contact => {
        return contact.name.toLowerCase().includes(this.searchText.toLowerCase());
      });
    },
  },  
 mounted() {
    this.setActive(this.activeIndex);
  },
}).mount("#app");
