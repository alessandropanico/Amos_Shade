document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("amosForm");
    const inviaButton = document.getElementById("inviaButtonEM");

    form.addEventListener("submit", async function(event) {
        event.preventDefault();

        console.log("Submit button clicked");

        const nomePersona = document.getElementById("nome").value;
        const emailPersona = document.getElementById("email").value;
        const oggetto = document.getElementById("oggetto").value;
        const messaggio = document.getElementById("messaggio").value;

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
        } catch (error) {
            console.error("Errore nell'invio dell'email:", error);
        }
    });

    inviaButton.addEventListener("click", function(event) {
        event.preventDefault();
        form.dispatchEvent(new Event("submit"));
    });
});
