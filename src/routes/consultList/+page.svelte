
<script lang="ts">


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

  // Fonction pour ajouter une nouvelle consultation
  function addConsultation() {
    alert("Ajouter une nouvelle consultation !");
    // Ajoutez ici la logique pour ajouter une consultation
  }
</script>

<div class="container mx-auto p-4">
  <div class="flex justify-between items-center mb-6">
    <h1 class="h1">Mes Consultations</h1>
    <button type="button" class="btn-icon variant-filled flex justify-center items-center">
      <i class="fa-solid fa-plus text-3xl"></i>
    </button>
  </div>
</div>

<div>
  {#each consultations as consultation (consultation.id)}
    <div class="card card-hover p-4 my-4 cursor-pointer"    >
      <div class="h3">{consultation.title}</div>
      <div class="text-sm text-gray-600">{consultation.description}</div>
      <div class="mt-2 flex justify-between items-center text-sm text-gray-500">
        <span>{consultation.questionsCount} questions</span>
        <span>{consultation.participantsCount} participants</span>
      </div>
    </div>
  {/each}
</div>