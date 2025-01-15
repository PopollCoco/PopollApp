<script>
  import { page } from '$app/stores';
  import { onMount } from 'svelte';

  let id;
  let consultation;

  // Exemple de données fictives
  const consultations = [
    {
      id: 1,
      title: "Sondage sur les préférences alimentaires",
      description: "Un sondage pour connaître vos plats préférés.",
      questions: [
        { id: 1, title: "Quel est votre plat préféré ?" },
        { id: 2, title: "Quel est votre dessert préféré ?" }
      ],
    },
    {
      id: 2,
      title: "Avis sur les films récents",
      description: "Partagez votre opinion sur les films sortis ce mois-ci.",
      questions: [
        { id: 1, title: "Quel film avez-vous préféré ?" },
        { id: 2, title: "Quel acteur vous a le plus impressionné ?" }
      ],
    },
  ];

  // Récupérer l'id de la route
  onMount(() => {
    id = parseInt($page.params.id); // Convertir l'id en nombre
    consultation = consultations.find((consultation) => consultation.id === id);
  });
</script>

<div class="container mx-auto px-4 py-8">
  {#if consultation}
    <div class="mb-6">
      <h1 class="text-2xl font-bold">{consultation.title}</h1>
      <p class="text-gray-600">{consultation.description}</p>
    </div>

    <div>
      {#each consultation.questions as question (question.id)}
        <div class="mb-4 p-4 border rounded-lg shadow-sm bg-gray-50">
          <h2 class="text-lg font-semibold">{question.title}</h2>
          <button class="btn variant-filled mt-2">Répondre à cette question</button>
        </div>
      {/each}
    </div>
  {:else}
    <div class="text-center text-lg text-gray-600">Consultation introuvable</div>
  {/if}
</div>
