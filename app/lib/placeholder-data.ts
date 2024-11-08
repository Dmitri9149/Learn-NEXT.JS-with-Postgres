const app_users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: 'app_user@54321',
  },
];

// -----------------

const breeds = [
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'American Bulldog',
    image_url: '/customers/evil-rabbit.png'
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Airedale Terrier',
    image_url: '/customers/evil-rabbit.png'
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Labrador Retriever',
    image_url: '/customers/evil-rabbit.png'
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Chinook',
    image_url: '/customers/evil-rabbit.png'
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Chow Chow',
    image_url: '/customers/evil-rabbit.png'
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Bolognese',
    image_url: '/customers/evil-rabbit.png'
  }
];

const traits = [
  {
    breed_id: breeds[0].id,
    affectionate_with_family: 0,
    good_with_other_dogs: 3,
    good_with_young_children: 3,
    shedding_level: 2,
    coat_grooming_frequency: 0,
    drooling_level: 0,
    openness_to_strangers: 0,
    playfulness_level: 0,
    watchdog_protective_nature: 0,
    adaptability_level: 0,
    trainability_level: 4,
    energy_level: 0,
    barking_level: 1,
    mental_stimulation_needs: 0
  },
  {
    breed_id: breeds[1].id,
    affectionate_with_family: 3,
    good_with_other_dogs: 3,
    good_with_young_children: 3,
    shedding_level: 1,
    coat_grooming_frequency:3,
    drooling_level: 1,
    openness_to_strangers: 3,
    playfulness_level: 3,
    watchdog_protective_nature: 5,
    adaptability_level: 3,
    trainability_level: 3,
    energy_level: 3,
    barking_level: 3,
    mental_stimulation_needs: 3
  },
  {
    breed_id: breeds[2].id,
    affectionate_with_family: 5,
    good_with_other_dogs: 5,
    good_with_young_children: 5,
    shedding_level: 4,
    coat_grooming_frequency: 2,
    drooling_level: 2,
    openness_to_strangers: 5,
    playfulness_level: 5,
    watchdog_protective_nature: 3,
    adaptability_level: 5,
    trainability_level: 5,
    energy_level: 5,
    barking_level: 3,
    mental_stimulation_needs: 4
  },
  {
    breed_id: breeds[3].id,
    affectionate_with_family: 4,
    good_with_other_dogs: 5,
    good_with_young_children: 5,
    shedding_level: 3,
    coat_grooming_frequency: 3,
    drooling_level: 2,
    openness_to_strangers: 3,
    playfulness_level: 3,
    watchdog_protective_nature: 4,
    adaptability_level: 4,
    trainability_level: 4,
    energy_level: 3,
    barking_level: 5,
    mental_stimulation_needs: 3
  },
  {
    breed_id: breeds[4].id,
    affectionate_with_family: 4,
    good_with_other_dogs: 3,
    good_with_young_children: 2,
    shedding_level: 3,
    coat_grooming_frequency: 3,
    drooling_level: 3,
    openness_to_strangers: 2,
    playfulness_level: 3,
    watchdog_protective_nature: 5,
    adaptability_level: 3,
    trainability_level: 3,
    energy_level: 3,
    barking_level: 1,
    mental_stimulation_needs: 3
  },
  {
    breed_id: breeds[5].id,
    affectionate_with_family: 3,
    good_with_other_dogs: 3,
    good_with_young_children: 3,
    shedding_level: 1,
    coat_grooming_frequency: 3,
    drooling_level: 1,
    openness_to_strangers: 5,
    playfulness_level: 1,
    watchdog_protective_nature: 1,
    adaptability_level: 5,
    trainability_level: 5,
    energy_level: 1,
    barking_level: 1,
    mental_stimulation_needs: 1
  }
];

export { app_users, breeds, traits };
