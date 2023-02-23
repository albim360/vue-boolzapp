const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      sentMessage: null,
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
              date: "19/02/2023 15:00:00",
              message: "Ciao, mi puoi aiutare con il mio nuovo progetto?",
              status: "received",
            },
            {
              date: "19/02/2023 16:00:00",
              message: "Certo, fammi sapere cosa ti serve",
              status: "sent",
            },
            {
              date: "19/02/2023 16:30:00",
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
    };
  },

  methods: {
    setActive(index) {
      this.activeIndex = index;
      this.activeContact = this.contacts[index];
      let messages = this.activeContact.messages;
      this.sentMessage = messages[messages.length - 1];
    },
  },

  directives: {
    "message-class": {
      mounted(el, binding) {
        const status = binding.value;
        el.classList.add(status === "sent" ? "send" : "receive");
      },
    },
  },

  mounted() {
    this.setActive(this.activeIndex);
  },
}).mount("#app");
