document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("amosForm");
    const inviaButton = document.getElementById("inviaButtonEM");

    form.addEventListener("submit", async function(event) {
        event.preventDefault();

        // Verifica se tutti i campi sono stati compilati
        const nomePersona = document.getElementById("nome").value;
        const emailPersona = document.getElementById("email").value;
        const oggetto = document.getElementById("oggetto").value;
        const messaggio = document.getElementById("messaggio").value;

        if (nomePersona && emailPersona && oggetto && messaggio) {
            console.log("Submit button clicked");

            console.log("Dati registrati:");
            console.log("Nome:", nomePersona);
            console.log("Email:", emailPersona);
            console.log("Oggetto:", oggetto);
            console.log("Messaggio:", messaggio);

            const emailData = {
                service_id: 'ServizioMio',
                template_id: 'TemplateMio',
                user_id: 'DYAuk3nJ1S4O-Y948',
                template_params: {
                    nomePersona,
                    emailPersona,
                    oggetto,
                    messaggio,
                },
            };

            try {
                await emailjs.send(emailData.service_id, emailData.template_id, emailData.template_params, emailData.user_id);
                const aziendaMessage = document.getElementById("aziendaMessage");
                aziendaMessage.textContent = "Informazioni inviate con successo!";

                document.getElementById("nome").value = "";
                document.getElementById("email").value = "";
                document.getElementById("oggetto").value = "";
                document.getElementById("messaggio").value = "";


            } catch (error) {
                console.error("Errore nell'invio dell'email:", error);
            }
        } else {
            alert("Per favore, compila tutti i campi prima di inviare il messaggio.");
        }
    });

    inviaButton.addEventListener("click", function(event) {
        event.preventDefault();
        form.dispatchEvent(new Event("submit"));
    });
});
