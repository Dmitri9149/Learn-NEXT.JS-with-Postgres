 import bcrypt from 'bcrypt';
 import { db } from '@vercel/postgres';
 import { breeds, app_users, f_traits } from '../lib/placeholder-data';

 const client = await db.connect();

 async function seedAppUsers() {
   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
   await client.sql`
     CREATE TABLE IF NOT EXISTS app_users (
       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
       name VARCHAR(255) NOT NULL,
       email TEXT NOT NULL UNIQUE,
       password TEXT NOT NULL
     );
   `;

   const insertedAppUsers = await Promise.all(
     app_users.map(async (app_user) => {
       const hashedPassword = await bcrypt.hash(app_user.password, 10);
       return client.sql`
         INSERT INTO app_users (id, name, email, password)
         VALUES (${app_user.id}, ${app_user.name}, ${app_user.email}, ${hashedPassword})
         ON CONFLICT (id) DO NOTHING;
       `;
     }),
   );

   return insertedAppUsers;
 }

/*
 async function seedTraits() {
   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

   await client.sql`
     CREATE TABLE IF NOT EXISTS traits (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        breed_id UUID NOT NULL,
        affectionate_with_family INT NOT NULL,  
        good_with_other_dogs INT NOT NULL,
        good_with_young_children INT NOT NULL,
        shedding_level INT NOT NULL,
        coat_grooming_frequency INT NOT NULL,
        drooling_level INT NOT NULL,
        openness_to_strangers INT NOT NULL,
        playfulness_level INT NOT NULL,
        watchdog_protective_nature INT NOT NULL,
        adaptability_level INT NOT NULL,
        trainability_level INT NOT NULL,
        energy_level INT NOT NULL,
        barking_level INT NOT NULL,
        mental_stimulation_needs INT NOT NULL
     );
   `;
   const insertedTraits = await Promise.all(
     traits.map(
       (trait) => client.sql`
         INSERT INTO traits (
          breed_id,
          affectionate_with_family,  
          good_with_other_dogs,
          good_with_young_children,
          shedding_level,
          coat_grooming_frequency,
          drooling_level, 
          openness_to_strangers,
          playfulness_level,
          watchdog_protective_nature,
          adaptability_level,
          trainability_level,
          energy_level,
          barking_level,
          mental_stimulation_needs, 
         )
         VALUES (${trait.breed_id}, 
          ${trait.affectionate_with_family}, 
          ${trait.good_with_other_dogs},
          ${trait.good_with_young_children},
          ${trait.shedding_level}, 
          ${trait.coat_grooming_frequency},
          ${trait.drooling_level},
          ${trait.openness_to_strangers}, 
          ${trait.playfulness_level},
          ${trait.watchdog_protective_nature},
          ${trait.adaptability_level}, 
          ${trait.trainability_level},
          ${trait.energy_level},
          ${trait.barking_level},
          ${trait.mental_stimulation_needs}
          )
         ON CONFLICT (id) DO NOTHING;
       `,
     ),
   );

   return insertedTraits;
 }

*/
 async function seedBreeds() {
   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

   await client.sql`
     CREATE TABLE IF NOT EXISTS breeds (
       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
       name VARCHAR(255) NOT NULL,
       image_url VARCHAR(255) NOT NULL
     );
   `;

   const insertedBreeds = await Promise.all(
     breeds.map(
       (breed) => client.sql`
         INSERT INTO breeds (id, name, image_url)
         VALUES (${breed.id}, ${breed.name}, ${breed.image_url})
         ON CONFLICT (id) DO NOTHING;
       `,
     ),
   );

   return insertedBreeds;
 }

 async function seedFTrs() {
   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

   await client.sql`
     CREATE TABLE IF NOT EXISTS f_traits (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        breed_id UUID NOT NULL,
        affectionate_with_family INT NOT NULL,
        good_with_other_dogs INT NOT NULL,
        good_with_young_children INT NOT NULL,
        shedding_level INT NOT NULL,
        coat_grooming_frequency INT NOT NULL,
        drooling_level INT NOT NULL,
        openness_to_strangers INT NOT NULL,
        playfulness_level INT NOT NULL,
        watchdog_protective_nature INT NOT NULL,
        adaptability_level INT NOT NULL,
        trainability_level INT NOT NULL,
        energy_level INT NOT NULL,
        barking_level INT NOT NULL,
        mental_stimulation_needs INT NOT NULL
     );
   `;

   const insertedFTrs = await Promise.all(
     f_traits.map(
       (trait) => client.sql`
         INSERT INTO f_traits (
          breed_id, 
          affectionate_with_family,
          good_with_other_dogs,
          good_with_young_children,
          shedding_level,
          coat_grooming_frequency,
          drooling_level, 
          openness_to_strangers,
          playfulness_level,
          watchdog_protective_nature,
          adaptability_level,
          trainability_level,
          energy_level,
          barking_level,
          mental_stimulation_needs
         )
         VALUES (
         ${trait.breed_id}, 
         ${trait.affectionate_with_family},
          ${trait.good_with_other_dogs},
          ${trait.good_with_young_children},
          ${trait.shedding_level}, 
          ${trait.coat_grooming_frequency},
          ${trait.drooling_level},
          ${trait.openness_to_strangers}, 
          ${trait.playfulness_level},
          ${trait.watchdog_protective_nature},
          ${trait.adaptability_level}, 
          ${trait.trainability_level},
          ${trait.energy_level},
          ${trait.barking_level},
          ${trait.mental_stimulation_needs}
         )
         ON CONFLICT (id) DO NOTHING;
       `,
     ),
   );

   return insertedFTrs;
 }

export async function GET() {
//  return Response.json({
//    message:
//      'Uncomment this file and remove this line. You can delete this file when you are finished.',
//  });
   try {
     await client.sql`BEGIN`;
     await seedAppUsers();
     await seedBreeds();
     await seedFTrs();
     await client.sql`COMMIT`;

     return Response.json({ message: 'Database seeded successfully' });
   } catch (error) {
     await client.sql`ROLLBACK`;
     return Response.json({ error }, { status: 500 });
   }
}


