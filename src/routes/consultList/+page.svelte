<script>
    import { goto } from '$app/navigation';

    // Exemple de données fictives représentant des consultations
    const consultations = [
      {
        id: 1,
        title: "Sondage sur les préférences alimentaires",
        description: "Un sondage pour connaître vos plats préférés.",
        questionsCount: 5,
        participantsCount: 10,
      },
      {
        id: 2,
        title: "Avis sur les films récents",
        description: "Partagez votre opinion sur les films sortis ce mois-ci.",
        questionsCount: 3,
        participantsCount: 20,
      },
      {
        id: 3,
        title: "Réunion de projet",
        description: "Évaluation des différentes idées de projet.",
        questionsCount: 2,
        participantsCount: 5,
      },
    ];
  
    // Fonction de redirection vers la page de consultation
    function goToConsultation(consultationId) {
      goto(`/consultation/${consultationId}`);
    }
  
    // Fonction pour ajouter une nouvelle consultation
    function addConsultation() {
      alert("Ajouter une nouvelle consultation !");
      // Ajoutez ici la logique pour ajouter une consultation
    }
  </script>
  
  <style>
    .consultation-title {
      @apply text-lg font-bold text-gray-800;
    }
  
    .consultation-description {
      @apply text-sm text-gray-600;
    }
  
    .consultation-footer {
      @apply mt-2 flex justify-between items-center text-sm text-gray-500;
    }
  </style>
  
  <div class="container mx-auto p-4">
    <div class="flex justify-between items-center mb-6">
      <h1 class="h1">Mes Consultations</h1>
      <div on:click={addConsultation} class="cursor-pointer">
      <img src="/icones/circle-plus.svg" alt="Ajouter une consult." class="w-10 h-10"/>
    </div>
    </div>
  
    <div>
      {#each consultations as consultation (consultation.id)}
        <div class="card card-hover p-4 my-4 cursor-pointer"
          on:click={() => goToConsultation(consultation.id)}
        >
          <div class="consultation-title">{consultation.title}</div>
          <div class="consultation-description">{consultation.description}</div>
          <div class="consultation-footer">
            <span>{consultation.questionsCount} questions</span>
            <span>{consultation.participantsCount} participants</span>
          </div>
        </div>
      {/each}
    </div>
  </div>
  