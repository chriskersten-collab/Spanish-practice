// Flat translation dictionary for all local mock scenarios
const LOCAL_TRANSLATIONS = {
  "¡Hola, buenas tardes! Bienvenidos a Tacos El Trompo. ¿Qué les pongo, marchante? ¿Cuántos tacos se va a echar?": "Hello, good afternoon! Welcome to Tacos El Trompo. What can I get you, customer? How many tacos are you going to have?",
  "¡Claro que sí, marchante! Tres al pastor con todo, cebolla y cilantro. ¿Y de tomar qué le damos? Tenemos horchata fresca, jamaica y refrescos.": "Of course, customer! Three al pastor with everything, onion and cilantro. And what can we get you to drink? We have fresh horchata, jamaica, and sodas.",
  "Sale y vale. Ahorita salen calientitos. Oiga, una pregunta... ¿va a comer aquí o se los pongo para llevar?": "Alright! They will be out hot in just a second. Hey, a question... is it to eat here or shall I make it to-go?",
  "Perfecto, jefe. Ya están envueltos en aluminio para que no se enfríen. ¿Le pongo salsa de la que pica o de la que no pica? ¿Algo más o le traigo la cuenta?": "Perfect, boss. They are already wrapped in foil so they don't get cold. Shall I add spicy or mild salsa? Anything else or shall I bring the check?",
  
  "¡Hola! Qué buena onda... qué súper bonito está tu perro. ¿Cómo se llama? ¿Y qué raza es?": "Hello! How cool... your dog is super pretty. What is their name? And what breed are they?",
  "¡Ay, qué padre! Se ve bien cariñoso. Oye, una pregunta... ¿es macho o hembra? ¿Y cuántos años tiene?": "Oh, how neat! He/she looks very affectionate. Hey, a question... is it male or female? And how old are they?",
  "¡Qué chido! Oye... ¿lo puedo acariciar? ¿O es medio tímido? ¿Es amigable o de casualidad muerde?": "How cool! Hey... can I pet him/her? Or is he/she a bit shy? Is he/she friendly or does he/she happen to bite?",
  
  "¡Hola! Buenas tardes. Bienvenido a Súper Express. ¿Le puedo ayudar a encontrar algo en particular?": "Hello! Good afternoon. Welcome to Súper Express. Can I help you find something in particular?",
  "¡Claro que sí! Los aguacates están justo en el pasillo tres, al fondo junto a los tomates. Están bien fresquecitos hoy, ¿eh?": "Of course! The avocados are right in aisle three, at the back next to the tomatoes. They are very fresh today, huh?",
  "Las tortillas de maíz calientitas las tenemos en una hielera especial justo a un lado de las cajas. ¿Necesita ayuda con algo más de su lista?": "We have the warm corn tortillas in a special cooler right next to the registers. Do you need help with anything else on your list?",
  
  "¡Buenas tardes! Bienvenido a Calzado León. ¿Busca algún estilo de calzado en particular? Hoy nos llegaron unas botas vaqueras preciosas.": "Good afternoon! Welcome to Calzado León. Are you looking for any specific shoe style? Today we got some gorgeous cowboy boots.",
  "¡Excelente gusto! Esas botas de piel de ternera son hechas artesanalmente en León. Son de súper buena calidad. ¿Qué número calza usted, jefe?": "Excellent taste! Those calfskin boots are handcrafted in León. They are super high quality. What size do you wear, boss?",
  "Muy bien, aquí tiene el número siete. Pruébeselas, camine un poquito... ¿Qué tal las siente? ¿Se las lleva puestas o se las pongo en su caja?": "Very well, here is size seven. Try them on, walk around a bit... How do they feel? Are you going to wear them out or shall I put them in their box?",
  
  "¡Hola, muy buenos días! Bienvenido a Café Corazón. ¿Qué cafecito le preparamos hoy?": "Hello, a very good morning! Welcome to Café Corazón. What coffee shall we prepare for you today?",
  "Excelente elección. Nuestro café de olla lleva canela de la buena y piloncillo de Veracruz. ¿Gusta acompañarlo con algo de nuestra panadería recién horneada?": "Excellent choice. Our café de olla has high-quality cinnamon and Veracruz brown cane sugar. Would you like to pair it with something from our freshly baked goods?",
  "Le recomiendo ampliamente la concha de vainilla, acaba de salir del horno y está súper suavecita. ¿Se la agregamos a su orden?": "I highly recommend the vanilla concha, it just came out of the oven and is super soft. Shall we add it to your order?",
  
  "¡Pásele, marchante! Sin compromiso, vea las hermosas artesanías de barro hechas a mano por mi familia en Oaxaca. ¿Busca algo bonito para regalar?": "Come on in, customer! No obligation, look at the beautiful clay handicrafts handmade by my family in Oaxaca. Are you looking for something nice for a gift?",
  "Ese jarrón de barro rojo es una belleza única, pintado a mano con motivos tradicionales. Normalmente está en trescientos pesos, pero para usted, se lo dejo en doscientos cincuenta. ¿Qué dice, se lo lleva?": "That red clay pot is a unique beauty, hand-painted with traditional patterns. It is normally three hundred pesos, but for you, I'll let you have it for two hundred and fifty. What do you say, will you take it?",
  "¡Excelente decisión! Se lo voy a envolver en bastante papel periódico para que viaje seguro y no se vaya a romper. ¿Va a pagar en efectivo o con tarjeta?": "Excellent decision! I am going to wrap it in plenty of newspaper so it travels safely and doesn't break. Are you paying with cash or card?",
  
  "¡Súbale, súbale! ¿A dónde va, güero? ¿Por dónde te llevo?": "Hop in, hop in! Where are you going, blondie/friend? Which way should I take you?",
  "¡Sí, claro! Pasamos justo por el Zócalo y la Alameda. Súbete. Oye, ¿ya sabes cuánto es del pasaje o te cobro de una vez?": "Yes, of course! We pass right by the Zócalo and the Alameda. Hop in. Hey, do you already know how much the fare is, or should I charge you right now?",
  "Son doce pesitos, jefe. Me los puedes pagar al bajar o de una vez si traes cambio. Avísame con tiempo dónde te bajas.": "It's twelve pesos, boss. You can pay me when you get off or right now if you have change. Let me know in advance where you get off.",
  
  "¡Buenas! ¿A dónde lo llevo, jefe? El tráfico está pesado hoy, pero nos vamos rápido.": "Good day! Where can I take you, boss? Traffic is heavy today, but we will get there fast.",
  "Huy, jefe... ir hasta la Zona Rosa a esta hora con todo el tráfico de Reforma... le sale en doscientos cincuenta pesos. ¿Cómo ve? ¿Se sube?": "Oh, boss... going all the way to the Zona Rosa at this hour with all the traffic on Reforma... it will cost you two hundred and fifty pesos. What do you think? Hop in?",
  "Híjole, jefe... doscientos es muy poco por el tráfico. Déjelo en doscientos veinte y ya nos vamos. Es un trato justo, ¿no cree?": "Geez, boss... two hundred is too little because of the traffic. Let's make it two hundred and twenty and we'll head out. It's a fair deal, don't you think?"
};

// 1. Scenario Database (Comprehensive Mexican Practice Scenarios)
const SCENARIOS = {
  'scenario-tacos': {
    id: 'scenario-tacos',
    title: 'La Taquería "El Trompo"',
    characterName: 'Don Chema',
    emoji: '🌮',
    role: 'Taquero (Taco Vendor)',
    difficulty: 'Principiante',
    description: 'Order tacos al pastor, specify a Mexican agua fresca, tell Don Chema whether you want to eat here or to-go, and ask for the check.',
    objective: 'Order 3 tacos al pastor, a water, make it "to-go" (para llevar), and ask for the check politely.',
    completionMessage: 'You ordered your tacos al pastor to-go like a true Chilango (Mexico City local)! Don Chema waves you off with a friendly "¡Buen provecho!"',
    turns: [
      {
        characterText: "¡Hola, buenas tardes! Bienvenidos a Tacos El Trompo. ¿Qué les pongo, marchante? ¿Cuántos tacos se va a echar?",
        characterSpeech: "Hola, buenas tardes. Bienvenidos a Tacos El Trompo. ¿Qué les pongo, marchante? ¿Cuántos tacos se va a echar?",
        promptEnglish: "Don Chema is asking what tacos you would like. Order 3 tacos al pastor.",
        expectedTip: "Instead of saying 'Yo quiero...', try using 'Me da...' or 'Me pone...' which are the native ways of ordering food in Mexico.",
        evaluate: (input) => {
          const lower = input.toLowerCase();
          let feedback = {
            translation: `"${input}"`,
            accuracy: "Muy bien (Good)",
            accuracyFeedback: "You ordered your tacos. Let's see how native it sounds!",
            cultureFeedback: ""
          };

          if (lower.includes("me da") || lower.includes("me pone") || lower.includes("quisiera") || lower.includes("póngame")) {
            feedback.accuracy = "Excelente (Excellent)";
            feedback.accuracyFeedback = "Perfect! Using 'Me da...' or 'Me pone...' is the most natural and polite way to order food in Mexico.";
          } else if (lower.includes("quiero")) {
            feedback.accuracy = "Correcto (Correct)";
            feedback.accuracyFeedback = "Grammatically fine, but 'Yo quiero...' can sound a bit demanding in Mexican culture.";
            feedback.cultureFeedback = "🌶️ **Mexican Ordering Tip**: To sound like a local, order using **'Me da...'** (Give me...) or **'¿Me pone...?'** (Put me...). It sounds warmer and much more polite than 'Quiero'.";
          }

          if (lower.includes("tres") || lower.includes("3")) {
            feedback.accuracyFeedback += " You correctly ordered three tacos.";
          } else {
            feedback.accuracyFeedback += " You ordered tacos, but make sure to mention 'tres' (3) to fulfill your challenge objective!";
          }

          if (lower.includes("pastor")) {
            feedback.cultureFeedback += " **Al Pastor**: Good choice! Tacos al pastor (pork marinated in dried chilies, spices, and pineapple) are the undisputed kings of central Mexican street food.";
          }

          return feedback;
        }
      },
      {
        characterText: "¡Claro que sí, marchante! Tres al pastor con todo, cebolla y cilantro. ¿Y de tomar qué le damos? Tenemos horchata fresca, jamaica y refrescos.",
        characterSpeech: "Claro que sí, marchante. Tres al pastor con todo, cebolla y cilantro. ¿Y de tomar qué le damos? Tenemos horchata fresca, jamaica y refrescos.",
        promptEnglish: "Don Chema is confirming with cilantro and onion ('con todo') and asking for your drink. Order an 'agua de horchata'.",
        expectedTip: "Specify 'agua de horchata' (a traditional sweet rice-milk drink) or 'jamaica' (hibiscus flower tea).",
        evaluate: (input) => {
          const lower = input.toLowerCase();
          let feedback = {
            translation: `"${input}"`,
            accuracy: "Excelente (Excellent)",
            accuracyFeedback: "Great drink selection!",
            cultureFeedback: ""
          };

          if (lower.includes("horchata")) {
            feedback.cultureFeedback = "🌶️ **Agua de Horchata**: Delicious choice! Sweet, creamy rice milk spiced with cinnamon. It pairs wonderfully with the spicy kick of salsa on pastor tacos.";
          } else if (lower.includes("jamaica")) {
            feedback.cultureFeedback = "🌶️ **Agua de Jamaica**: Excellent! A refreshing tart drink made from steeped hibiscus flowers, very popular across Mexico.";
          } else {
            feedback.accuracy = "Bien (Okay)";
            feedback.accuracyFeedback = "You ordered a drink, but try to ask specifically for 'horchata' or 'jamaica' to enjoy a true Mexican 'agua fresca' experience!";
          }

          if (lower.includes("por favor")) {
            feedback.accuracyFeedback += " Adding 'por favor' is always appreciated!";
          }

          return feedback;
        }
      },
      {
        characterText: "Sale y vale. Ahorita salen calientitos. Oiga, una pregunta... ¿va a comer aquí o se los pongo para llevar?",
        characterSpeech: "Sale y vale. Ahorita salen calientitos. Oiga, una pregunta... ¿va a comer aquí o se los pongo para llevar?",
        promptEnglish: "Don Chema is asking if it's for here or to-go. Say it's to-go ('para llevar, por favor').",
        expectedTip: "In Mexico, 'to-go' is universally said as 'para llevar'.",
        evaluate: (input) => {
          const lower = input.toLowerCase();
          let feedback = {
            translation: `"${input}"`,
            accuracy: "Correcto (Correct)",
            accuracyFeedback: "Good answer.",
            cultureFeedback: ""
          };

          if (lower.includes("llevar")) {
            feedback.accuracy = "Excelente (Excellent)";
            feedback.accuracyFeedback = "Spot on! 'Para llevar, por favor' is the exact phrasing locals use.";
            feedback.cultureFeedback = "🌶️ **Mexican Slang Tip**: Don Chema said **'Sale y vale'**. This is a popular, warm way of saying 'Alright!' or 'You got it!' in Mexico.";
          } else if (lower.includes("ir")) {
            feedback.accuracy = "Inexacto (Slightly unnatural)";
            feedback.accuracyFeedback = "Avoid using 'para ir' (for to go), which is a literal translation of the English phrase.";
            feedback.cultureFeedback = "🌶️ **Vocabulary Tip**: Always use **'para llevar'** for to-go orders. Avoid 'para ir' as it doesn't carry that meaning in Spanish.";
          }

          return feedback;
        }
      },
      {
        characterText: "Perfecto, jefe. Ya están envueltos en aluminio para que no se enfríen. ¿Le pongo salsa de la que pica o de la que no pica? ¿Algo más o le traigo la cuenta?",
        characterSpeech: "Perfecto, jefe. Ya están envueltos en aluminio para que no se enfríen. ¿Le pongo salsa de la que pica o de la que no pica? ¿Algo más o le traigo la cuenta?",
        promptEnglish: "Don Chema wrapped them in foil. He asks if you want spicy or mild salsa, and if you are ready for the check. Ask for the check politely.",
        expectedTip: "Say 'La cuenta, por favor' (The check, please).",
        evaluate: (input) => {
          const lower = input.toLowerCase();
          let feedback = {
            translation: `"${input}"`,
            accuracy: "Correcto (Correct)",
            accuracyFeedback: "You asked for the check.",
            cultureFeedback: ""
          };

          if (lower.includes("cuenta")) {
            feedback.accuracy = "Excelente (Excellent)";
            feedback.accuracyFeedback = "Perfect! 'La cuenta, por favor' is the polite, standard way to ask for the bill.";
            feedback.cultureFeedback = "🌶️ **Mexican Humour**: Don Chema asked if you want salsa 'de la que pica o de la que no pica'. Mexicans love to joke about how spicy their salsas are, claiming one 'doesn't sting' when it actually does! Be careful!";
          } else if (lower.includes("cheque")) {
            feedback.accuracy = "Incorrecto (Unnatural)";
            feedback.accuracyFeedback = "Avoid using 'cheque'.";
            feedback.cultureFeedback = "🌶️ **Vocabulary Alert**: In Mexico, a **'cheque'** is only a paper banking check. For a restaurant bill, always ask for **'la cuenta'**.";
          }

          return feedback;
        }
      }
    ]
  },

  'scenario-dog': {
    id: 'scenario-dog',
    title: 'Paseando al Perro',
    characterName: 'Andrés',
    emoji: '🐕',
    role: 'Paseador de Perros (Dog Owner)',
    difficulty: 'Principiante',
    description: 'While walking your dog in Parque México in Condesa, a friendly local, Andrés, stops to compliment your pet and ask about them.',
    objective: 'State your dog\'s name and breed, specify its gender ("macho" or "hembra"), and tell him if it\'s friendly and if he can pet them.',
    completionMessage: 'Andrés gives your dog a friendly pat, exchanges pleasantries, and wishes you a great day in the park! ¡Hermosa comunidad!',
    turns: [
      {
        characterText: "¡Hola! Qué buena onda... qué súper bonito está tu perro. ¿Cómo se llama? ¿Y qué raza es?",
        characterSpeech: "Hola. Qué buena onda. qué súper bonito está tu perro. ¿Cómo se llama? ¿Y qué raza es?",
        promptEnglish: "Andrés thinks your dog is gorgeous. Greet him, say your dog's name, and what breed they are.",
        expectedTip: "You can say: 'Se llama Max y es un Golden Retriever.' or similar.",
        evaluate: (input) => {
          const lower = input.toLowerCase();
          let feedback = {
            translation: `"${input}"`,
            accuracy: "Correcto (Correct)",
            accuracyFeedback: "You greeted Andrés and stated your dog's details.",
            cultureFeedback: ""
          };

          if (lower.includes("perrito") || lower.includes("perrita")) {
            feedback.accuracy = "Excelente (Excellent)";
            feedback.accuracyFeedback = "Perfect! Using the diminutive 'perrito' sounds incredibly affectionate and is very common in Mexican Spanish.";
          }

          if (lower.includes("llama")) {
            // Good name phrasing
          } else {
            feedback.accuracyFeedback += " Make sure to use the verb 'llamarse' (e.g. 'Se llama...') to state the name clearly.";
          }

          feedback.cultureFeedback = "🌶️ **Pet Culture in Mexico**: Mexico City, especially neighborhoods like Roma and Condesa, is incredibly dog-friendly. You will hear locals use words like **'lomito'** or **'perrihijo'** (dog-child) in very casual settings!";
          return feedback;
        }
      },
      {
        characterText: "¡Ay, qué padre! Se ve bien cariñoso. Oye, una pregunta... ¿es macho o hembra? ¿Y cuántos años tiene?",
        characterSpeech: "Ay, qué padre. Se ve bien cariñoso. Oye, una pregunta... ¿es macho o hembra? ¿Y cuántos años tiene?",
        promptEnglish: "Andrés thinks they look very affectionate. State their gender ('macho' or 'hembra') and their age in years.",
        expectedTip: "Use 'macho' for male and 'hembra' for female (e.g. 'Es hembra, tiene dos años').",
        evaluate: (input) => {
          const lower = input.toLowerCase();
          let feedback = {
            translation: `"${input}"`,
            accuracy: "Correcto (Correct)",
            accuracyFeedback: "You specified the gender and age.",
            cultureFeedback: ""
          };

          if (lower.includes("macho") || lower.includes("hembra")) {
            feedback.accuracy = "Excelente (Excellent)";
            feedback.accuracyFeedback = "Perfect choice of words! In Spanish, animal genders are always described as 'macho' (male) or 'hembra' (female).";
          } else if (lower.includes("chico") || lower.includes("chica") || lower.includes("hombre") || lower.includes("mujer")) {
            feedback.accuracy = "Inexacto (Slightly unnatural)";
            feedback.accuracyFeedback = "Avoid using 'chico/chica' for animals, as those terms are strictly for humans.";
            feedback.cultureFeedback = "🌶️ **Animal Vocabulary**: Always use **'macho'** and **'hembra'** for pet genders. Avoid 'chico' or 'niño' unless joking affectionately!";
          }

          if (lower.includes("años") || lower.includes("meses")) {
            // Good age
          } else {
            feedback.accuracyFeedback += " Remember to state the age using the verb 'tener' (e.g., 'Tiene tres años').";
          }

          return feedback;
        }
      },
      {
        characterText: "¡Qué chido! Oye... ¿lo puedo acariciar? ¿O es medio tímido? ¿Es amigable o de casualidad muerde?",
        characterSpeech: "Qué chido. Oye... ¿lo puedo acariciar? ¿O es medio tímido? ¿Es amigable o de casualidad muerde?",
        promptEnglish: "Andrés is asking if he can pet your dog and if they are friendly or bite. Tell him yes, he can pet him, and that he is very friendly and doesn't bite.",
        expectedTip: "You can say: 'Sí, claro, lo puedes acariciar. Es súper amigable y no muerde.'",
        evaluate: (input) => {
          const lower = input.toLowerCase();
          let feedback = {
            translation: `"${input}"`,
            accuracy: "Excelente (Excellent)",
            accuracyFeedback: "Beautiful response! You gave permission and assured him the dog is safe.",
            cultureFeedback: "🌶️ **Vocabulary Tip**: Andrés used the Mexican slang word **'Qué chido'** which means 'How cool!' or 'How neat!'. The word for 'to pet' or 'to caress' an animal in Spanish is **'acariciar'**. Assuring someone with **'No muerde'** (He/she doesn't bite) is the perfect local custom!"
          };
          return feedback;
        }
      }
    ]
  },

  'scenario-supermarket': {
    id: 'scenario-supermarket',
    title: 'El Súper de la Esquina',
    characterName: 'Sofía',
    emoji: '🥑',
    role: 'Asistente de Tienda (Store Clerk)',
    difficulty: 'Intermedio',
    description: 'Ask Sofía politely where to find key cooking items: fresh avocados and warm corn tortillas. Use polite Mexican introductory phrasing.',
    objective: 'Politely catch Sofía\'s attention, ask where the avocados (aguacates) are, and then ask for the tortillas de maíz.',
    completionMessage: 'Sofía pointed you exactly to the fresh produce section and the warm tortilla chest. You politely thanked her and wished her a great day!',
    turns: [
      {
        characterText: "¡Hola! Buenas tardes. Bienvenido a Súper Express. ¿Le puedo ayudar a encontrar algo en particular?",
        characterSpeech: "Hola. Buenas tardes. Bienvenido a Súper Express. ¿Le puedo ayudar a encontrar algo en particular?",
        promptEnglish: "Sofía welcomes you. Polite introduction: Catch her attention and ask where the avocados ('los aguacates') are.",
        expectedTip: "Start with 'Disculpe la molestia...' (Excuse the bother) or 'Disculpe, ¿dónde puedo encontrar...?'",
        evaluate: (input) => {
          const lower = input.toLowerCase();
          let feedback = {
            translation: `"${input}"`,
            accuracy: "Correcto (Correct)",
            accuracyFeedback: "You asked for the avocados.",
            cultureFeedback: ""
          };

          if (lower.includes("disculpe") || lower.includes("con permiso") || lower.includes("perdón")) {
            feedback.accuracy = "Excelente (Excellent)";
            feedback.accuracyFeedback = "Wonderful! Opening with 'Disculpe' (Excuse me) is highly polite and typical of respectful interactions in Mexico.";
          }

          if (lower.includes("aguacate") || lower.includes("aguacates")) {
            feedback.cultureFeedback = "🌶️ **Aguacate**: The avocado! The word comes from the Nahuatl **'ahuacatl'**. Mexico is the largest producer of avocados in the world, often called 'oro verde' (green gold).";
          } else if (lower.includes("palta")) {
            feedback.accuracy = "Bien, pero no mexicano (Good but not Mexican)";
            feedback.accuracyFeedback = "You used 'palta'. While common in South America (Chile, Peru, Argentina), this is never used in Mexico.";
            feedback.cultureFeedback = "🌶️ **Mexican Vocabulary**: In Mexico, the only word for avocado is **'aguacate'**. Avoid 'palta' as locals will find it highly unusual!";
          }

          return feedback;
        }
      },
      {
        characterText: "¡Claro que sí! Los aguacates están justo en el pasillo tres, al fondo junto a los tomates. Están bien fresquecitos hoy, ¿eh?",
        characterSpeech: "Claro que sí. Los aguacates están justo en el pasillo tres, al fondo junto a los tomates. Están bien fresquecitos hoy, ¿eh?",
        promptEnglish: "Sofía tells you they are in aisle three next to the tomatoes. Now politely ask her where the 'tortillas de maíz' are.",
        expectedTip: "You can say: 'Muchas gracias. Y disculpe, ¿dónde están las tortillas de maíz?'",
        evaluate: (input) => {
          const lower = input.toLowerCase();
          let feedback = {
            translation: `"${input}"`,
            accuracy: "Correcto (Correct)",
            accuracyFeedback: "You asked for the tortillas.",
            cultureFeedback: ""
          };

          if (lower.includes("gracias")) {
            feedback.accuracyFeedback = "Great job acknowledging her help with 'gracias' first.";
          }

          if (lower.includes("tortilla") || lower.includes("tortillas")) {
            feedback.accuracy = "Excelente (Excellent)";
            feedback.cultureFeedback = "🌶️ **Tortillas de maíz**: The staple food of Mexico. central and southern Mexico revolves entirely around traditional warm corn tortillas, usually kept in a thermal cooler chest or fabric 'tortillero'.";
          }

          return feedback;
        }
      },
      {
        characterText: "Las tortillas de maíz calientitas las tenemos en una hielera especial justo a un lado de las cajas. ¿Necesita ayuda con algo más de su lista?",
        characterSpeech: "Las tortillas de maíz calientitas las tenemos en una hielera especial justo a un lado de las cajas. ¿Necesita ayuda con algo más de su lista?",
        promptEnglish: "Sofía says they are in a special cooler by the registers. Thank her warmly and wish her a great day to conclude the exchange.",
        expectedTip: "Say 'Muchas gracias por su ayuda. Que tenga un buen día.'",
        evaluate: (input) => {
          const lower = input.toLowerCase();
          let feedback = {
            translation: `"${input}"`,
            accuracy: "Excelente (Excellent)",
            accuracyFeedback: "Beautifully wrapped up!",
            cultureFeedback: "🌶️ **Politeness Tip**: Wishing someone a good day with **'Que tenga un excelente día'** or **'Que le vaya muy bien'** (May things go well for you) is an extremely warm, common, and appreciated gesture in Mexico."
          };
          return feedback;
        }
      }
    ]
  },

  'scenario-shoes': {
    id: 'scenario-shoes',
    title: 'La Zapatería de León',
    characterName: 'Valeria',
    emoji: '👟',
    role: 'Vendedora (Store Clerk)',
    difficulty: 'Intermedio',
    description: 'Shop for footwear in a local shoe boutique. Leather shoes from León, Guanajuato are world-famous. Ask for your size and purchase them.',
    objective: 'Greet Valeria, ask for leather boots ("botas de piel"), state your size ("número siete"), and decide to buy them in their box ("en su caja").',
    completionMessage: 'Valeria packages your new handcrafted leather boots, hands you the receipt, and thanks you warmly! ¡Están de lujo!',
    turns: [
      {
        characterText: "¡Buenas tardes! Bienvenido a Calzado León. ¿Busca algún estilo de calzado en particular? Hoy nos llegaron unas botas vaqueras preciosas.",
        characterSpeech: "Buenas tardes. Bienvenido a Calzado León. ¿Busca algún estilo de calzado en particular? Hoy nos llegaron unas botas vaqueras preciosas.",
        promptEnglish: "Valeria greets you. Say you are looking for leather boots ('botas de piel').",
        expectedTip: "Use 'botas de piel' for leather boots, which is highly natural in Mexico.",
        evaluate: (input) => {
          const lower = input.toLowerCase();
          let feedback = {
            translation: `"${input}"`,
            accuracy: "Correcto (Correct)",
            accuracyFeedback: "You asked for leather boots.",
            cultureFeedback: ""
          };

          if (lower.includes("piel")) {
            feedback.accuracy = "Excelente (Excellent)";
            feedback.accuracyFeedback = "Perfect! In Mexico, **'piel'** (skin) is the universal word used for leather goods, footwear, and apparel rather than 'cuero' (though 'cuero' is understood).";
          } else if (lower.includes("cuero")) {
            feedback.accuracy = "Bien (Good)";
            feedback.cultureFeedback = "🌶️ **Vocabulary Tip**: While 'cuero' is correct Spanish, Mexicans almost exclusively refer to leather shoes and jackets as **'de piel'**.";
          }

          return feedback;
        }
      },
      {
        characterText: "¡Excelente gusto! Esas botas de piel de ternera son hechas artesanalmente en León. Son de súper buena calidad. ¿Qué número calza usted, jefe?",
        characterSpeech: "Excelente gusto. Esas botas de piel de ternera son hechas artesanalmente en León. Son de súper buena calidad. ¿Qué número calza usted, jefe?",
        promptEnglish: "Valeria commends your taste and asks for your shoe size. Tell her you wear size 7 ('número siete').",
        expectedTip: "In Mexico, shoe sizes are called 'número' (number) rather than 'talla'.",
        evaluate: (input) => {
          const lower = input.toLowerCase();
          let feedback = {
            translation: `"${input}"`,
            accuracy: "Correcto (Correct)",
            accuracyFeedback: "You stated your size.",
            cultureFeedback: ""
          };

          if (lower.includes("número") || lower.includes("numero")) {
            feedback.accuracy = "Excelente (Excellent)";
            feedback.accuracyFeedback = "Fantastic! You used 'número' which is the exact, correct term for footwear size in Mexico.";
          } else if (lower.includes("talla")) {
            feedback.accuracy = "Inexacto (Slightly unnatural)";
            feedback.accuracyFeedback = "Avoid using 'talla' for shoes. 'Talla' is used for clothes (shirts, pants). For shoes, always say 'número'.";
            feedback.cultureFeedback = "🌶️ **Size Vocabulary**: In Mexican stores, use **'número'** for shoes and **'talla'** for clothing. Example: *'¿Tiene en número siete?'* vs *'¿Tiene en talla mediana?'*";
          }

          return feedback;
        }
      },
      {
        characterText: "Muy bien, aquí tiene el número siete. Pruébeselas, camine un poquito... ¿Qué tal las siente? ¿Se las lleva puestas o se las pongo en su caja?",
        characterSpeech: "Muy bien, aquí tiene el número siete. Pruébeselas, camine un poquito... ¿Qué tal las siente? ¿Se las lleva puestas o se las pongo en su caja?",
        promptEnglish: "Valeria hands you size 7. Say they are very comfortable, and ask for them in their box ('en su caja, por favor').",
        expectedTip: "Say: 'Están muy cómodas. En su caja, por favor.'",
        evaluate: (input) => {
          const lower = input.toLowerCase();
          let feedback = {
            translation: `"${input}"`,
            accuracy: "Excelente (Excellent)",
            accuracyFeedback: "Purchase completed successfully!",
            cultureFeedback: "🌶️ **Footwear Culture**: Valeria asked if you want to wear them out (**'llevarlas puestas'**) or in their box (**'en su caja'**). León, Guanajuato (where Valeria says the boots are made) is known as the 'Shoe Capital of the World' and produces outstanding leather products!"
          };
          return feedback;
        }
      }
    ]
  },

  'scenario-cafe': {
    id: 'scenario-cafe',
    title: 'Café de Olla y Conchas',
    characterName: 'Mateo',
    emoji: '☕',
    role: 'Barista',
    difficulty: 'Principiante',
    description: 'Order a traditional spiced Mexican coffee and ask the friendly barista, Mateo, what sweet pastries (pan dulce) he recommends.',
    objective: 'Order a "Café de Olla", and ask for a sweet bread recommendation ("pan dulce" or "concha").',
    completionMessage: 'Mateo handed you a steaming, cinnamon-scented Café de Olla and a fresh vanilla concha. ¡Qué rico!',
    turns: [
      {
        characterText: "¡Hola, muy buenos días! Bienvenido a Café Corazón. ¿Qué cafecito le preparamos hoy?",
        characterSpeech: "Hola, muy buenos días. Bienvenido a Café Corazón. ¿Qué cafecito le preparamos hoy?",
        promptEnglish: "Mateo welcomes you. Order a 'Café de Olla' using polite phrasing.",
        expectedTip: "Say 'Buenos días, me da un café de olla, por favor.'",
        evaluate: (input) => {
          const lower = input.toLowerCase();
          let feedback = {
            translation: `"${input}"`,
            accuracy: "Correcto (Correct)",
            accuracyFeedback: "You ordered a coffee.",
            cultureFeedback: ""
          };

          if (lower.includes("olla")) {
            feedback.accuracy = "Excelente (Excellent)";
            feedback.accuracyFeedback = "Perfect! You ordered the Café de Olla.";
            feedback.cultureFeedback = "🌶️ **Café de Olla**: A traditional Mexican coffee simmered in clay pots (ollas) with Mexican cinnamon, orange peel, and **piloncillo** (unrefined whole cane sugar).";
          } else {
            feedback.accuracyFeedback += " Next time, try asking for a 'Café de Olla' specifically to try this Mexican classic!";
          }

          if (lower.includes("por favor")) {
            feedback.accuracyFeedback += " Good use of politeness!";
          }

          return feedback;
        }
      },
      {
        characterText: "Excelente elección. Nuestro café de olla lleva canela de la buena y piloncillo de Veracruz. ¿Gusta acompañarlo con algo de nuestra panadería recién horneada?",
        characterSpeech: "Excelente elección. Nuestro café de olla lleva canela de la buena y piloncillo de Veracruz. ¿Gusta acompañarlo con algo de nuestra panadería recién horneada?",
        promptEnglish: "Mateo commends your choice. Ask him what sweet bread pastry ('pan dulce') he recommends.",
        expectedTip: "You can say: '¿Qué pan dulce me recomienda?' or '¿Qué conchas tiene hoy?'",
        evaluate: (input) => {
          const lower = input.toLowerCase();
          let feedback = {
            translation: `"${input}"`,
            accuracy: "Excelente (Excellent)",
            accuracyFeedback: "You asked for a recommendation.",
            cultureFeedback: ""
          };

          if (lower.includes("recomienda") || lower.includes("recomendación")) {
            feedback.accuracyFeedback = "Perfectly asked for a recommendation.";
          }

          if (lower.includes("pan dulce") || lower.includes("concha") || lower.includes("conchas")) {
            feedback.cultureFeedback = "🌶️ **Pan Dulce / Conchas**: Traditional Mexican sweet bread. The **'Concha'** is the absolute favorite—a brioche-like bun covered in a crunchy sugar topping scored to look like a seashell.";
          }

          return feedback;
        }
      },
      {
        characterText: "Le recomiendo ampliamente la concha de vainilla, acaba de salir del horno y está súper suavecita. ¿Se la agregamos a su orden?",
        characterSpeech: "Le recomiendo ampliamente la concha de vainilla, acaba de salir del horno y está súper suavecita. ¿Se la agregamos a su orden?",
        promptEnglish: "Mateo recommends the fresh vanilla concha. Say yes ('Sí, por favor') and conclude the order.",
        evaluate: (input) => {
          const lower = input.toLowerCase();
          let feedback = {
            translation: `"${input}"`,
            accuracy: "Excelente (Excellent)",
            accuracyFeedback: "Order completed successfully!",
            cultureFeedback: "🌶️ **Vocabulary Highlight**: Mateo used **'súper'** ('súper suavecita'). Using 'súper' before adjectives (e.g. 'súper rico', 'súper bien') is extremely common in casual Mexican speech to mean 'very'."
          };
          return feedback;
        }
      }
    ]
  },

  'scenario-market': {
    id: 'scenario-market',
    title: 'Mercado de Artesanías',
    characterName: 'Doña Carmen',
    emoji: '🏺',
    role: 'Artesana (Artisan)',
    difficulty: 'Intermedio',
    description: 'Walk through an outdoor craft market, greet Doña Carmen politely, ask the price of a beautiful clay pot, and complete a friendly purchase.',
    objective: 'Greet Doña Carmen politely with "Buenas tardes", ask the price of the clay pot ("el jarrón de barro"), and complete the sale.',
    completionMessage: 'You politely negotiated a friendly price for the stunning hand-painted clay pot, thanked Doña Carmen, and walked away with a beautiful Mexican craft!',
    turns: [
      {
        characterText: "¡Pásele, marchante! Sin compromiso, vea las hermosas artesanías de barro hechas a mano por mi familia en Oaxaca. ¿Busca algo bonito para regalar?",
        characterSpeech: "Pásele, marchante. Sin compromiso, vea las hermosas artesanías de barro hechas a mano por mi familia en Oaxaca. ¿Busca algo bonito para regalar?",
        promptEnglish: "Doña Carmen invites you in. Greet her politely and ask how much the clay pot ('el jarrón de barro') costs.",
        expectedTip: "Start with 'Buenas tardes'. Then ask: '¿Qué precio tiene este jarrón de barro?'",
        evaluate: (input) => {
          const lower = input.toLowerCase();
          let feedback = {
            translation: `"${input}"`,
            accuracy: "Correcto (Correct)",
            accuracyFeedback: "You asked for the price.",
            cultureFeedback: ""
          };

          if (lower.includes("tardes") || lower.includes("días") || lower.includes("hola")) {
            feedback.accuracyFeedback = "Great! Opening with a warm greeting is standard and highly respected in Mexican markets.";
          }

          if (lower.includes("barro") || lower.includes("jarrón")) {
            feedback.accuracy = "Excelente (Excellent)";
            feedback.cultureFeedback = "🌶️ **Barro**: Red or black clay pottery (**barro rojo** or **barro negro**) is one of Mexico's most iconic and ancient artisan crafts, particularly famous in Oaxaca and Puebla.";
          }

          return feedback;
        }
      },
      {
        characterText: "Ese jarrón de barro rojo es una belleza única, pintado a mano con motivos tradicionales. Normalmente está en trescientos pesos, pero para usted, se lo dejo en doscientos cincuenta. ¿Qué dice, se lo lleva?",
        characterSpeech: "Ese jarrón de barro rojo es una belleza única, pintado a mano con motivos tradicionales. Normalmente está en trescientos pesos, pero para usted, se lo dejo en doscientos cincuenta. ¿Qué dice, se lo lleva?",
        promptEnglish: "She says the red clay pot is hand-painted, normally 300 pesos, but she offers it to you for 250 pesos. Politely accept the offer.",
        expectedTip: "You can say: '¡Excelente! Me parece muy bien, me lo llevo. Muchas gracias.'",
        evaluate: (input) => {
          const lower = input.toLowerCase();
          let feedback = {
            translation: `"${input}"`,
            accuracy: "Excelente (Excellent)",
            accuracyFeedback: "You accepted the price and agreed to buy it.",
            cultureFeedback: "🌶️ **Market Culture (El Regateo)**: While mild bargaining (regateo) exists in Mexico, Doña Carmen proactively offered you a discount ('para usted, se lo dejo en...'). Accepting this politely with **'Me lo llevo'** (I'll take it) builds wonderful customer-artisan rapport!"
          };
          return feedback;
        }
      },
      {
        characterText: "¡Excelente decisión! Se lo voy a envolver en bastante papel periódico para que viaje seguro y no se vaya a romper. ¿Va a pagar en efectivo o con tarjeta?",
        characterSpeech: "Excelente decisión. Se lo voy a envolver en bastante papel periódico para que viaje seguro y no se vaya a romper. ¿Va a pagar en efectivo o con tarjeta?",
        promptEnglish: "Doña Carmen is wrapping it in newspaper. She asks if you want to pay with cash ('efectivo') or card ('tarjeta'). Choose cash and thank her.",
        expectedTip: "Say 'En efectivo, por favor. Aquí tiene.'",
        evaluate: (input) => {
          const lower = input.toLowerCase();
          let feedback = {
            translation: `"${input}"`,
            accuracy: "Excelente (Excellent)",
            accuracyFeedback: "Payment choice made!",
            cultureFeedback: "🌶️ **Cash in Mexico**: In local traditional markets (**tianguis** or **mercados de artesanías**), cash (**efectivo**) is highly preferred and sometimes the only accepted form of payment. Having small-denomination bills (like 50, 100, or 200 peso notes) is extremely helpful."
          };
          return feedback;
        }
      }
    ]
  },

  'scenario-colectivo': {
    id: 'scenario-colectivo',
    title: 'El Colectivo Chilango',
    characterName: 'Don Beto',
    emoji: '🚐',
    role: 'Chofer de Colectivo (Van Driver)',
    difficulty: 'Intermedio',
    description: 'Flag down a collective van (pesero) in Mexico City, ask if it goes to the Centro, inquire about the fare, and call out your stop using authentic Mexican slang.',
    objective: 'Ask Don Beto if he is going to "el Centro", ask for the fare ("¿Cuánto es del pasaje?"), and call out your stop using local Mexican phrasing ("¡Bajan!" or "¡En la esquina bajan!").',
    completionMessage: 'You rode the pesero like a true chilango! You paid your pasaje and called out your stop with perfect Mexican timing. ¡Excelente viaje!',
    turns: [
      {
        characterText: "¡Súbale, súbale! ¿A dónde va, güero? ¿Por dónde te llevo?",
        characterSpeech: "Súbale, súbale. ¿A dónde va, güero? ¿Por dónde te llevo?",
        promptEnglish: "Don Beto welcomes you. Ask him politely if he is going to downtown ('el Centro').",
        expectedTip: "Start with 'Disculpe, ¿va para el Centro?' or 'Buenas tardes, ¿va al Centro?'",
        evaluate: (input) => {
          const lower = input.toLowerCase();
          let feedback = {
            translation: `"${input}"`,
            accuracy: "Correcto (Correct)",
            accuracyFeedback: "You asked if the van goes to the Centro.",
            cultureFeedback: ""
          };

          if (lower.includes("disculpe") || lower.includes("buenas") || lower.includes("tardes")) {
            feedback.accuracyFeedback = "Great job opening with a polite greeting or apology.";
          }

          if (lower.includes("centro")) {
            feedback.accuracy = "Excelente (Excellent)";
            feedback.cultureFeedback = "🌶️ **Mexican Colectivos**: In Mexico, especially in CDMX, these shared minivans or small buses are affectionately called **'peseros'** (historically because the fare was one peso) or **'combis'**. Don Beto calls you **'güero'**—a very common, affectionate Mexican slang term used by merchants and drivers to refer to customers regardless of their actual hair color!";
          } else {
            feedback.accuracy = "Bien (Good)";
            feedback.accuracyFeedback += " However, remember to specify 'el Centro' to fulfill your challenge objective!";
          }

          return feedback;
        }
      },
      {
        characterText: "¡Sí, claro! Pasamos justo por el Zócalo y la Alameda. Súbete. Oye, ¿ya sabes cuánto es del pasaje o te cobro de una vez?",
        characterSpeech: "Sí, claro. Pasamos justo por el Zócalo y la Alameda. Súbete. Oye, ¿ya sabes cuánto es del pasaje o te cobro de una vez?",
        promptEnglish: "Don Beto confirms the route. Ask him how much the fare is using local transit vocabulary.",
        expectedTip: "Ask '¿Cuánto es del pasaje?' or '¿Cuánto cuesta el pasaje?'",
        evaluate: (input) => {
          const lower = input.toLowerCase();
          let feedback = {
            translation: `"${input}"`,
            accuracy: "Correcto (Correct)",
            accuracyFeedback: "You asked for the fare.",
            cultureFeedback: ""
          };

          if (lower.includes("pasaje")) {
            feedback.accuracy = "Excelente (Excellent)";
            feedback.accuracyFeedback = "Perfect! Using the word 'pasaje' is the absolute most authentic and common way to refer to fares in Mexican public transport.";
            feedback.cultureFeedback = "🌶️ **Fares & Payments**: In Mexico, the bus or van fare is called **'el pasaje'** (never 'boleto' or 'tarifa' in this context). On busy routes, passengers pass their money forward through other riders shouting **'¿Le pasa mi pasaje, por favor?'** and the change is passed back the same way. It is a beautiful display of community trust!";
          } else if (lower.includes("costo") || lower.includes("cuánto es") || lower.includes("cuesta")) {
            feedback.accuracy = "Bien (Good)";
            feedback.cultureFeedback = "🌶️ **Transit Tip**: While '¿Cuánto cuesta?' or '¿Cuánto es?' is fully understood, try using **'¿Cuánto es del pasaje?'** to sound like a native Mexican rider!";
          }

          return feedback;
        }
      },
      {
        characterText: "Son doce pesitos, jefe. Me los puedes pagar al bajar o de una vez si traes cambio. Avísame con tiempo dónde te bajas.",
        characterSpeech: "Son doce pesitos, jefe. Me los puedes pagar al bajar o de una vez si traes cambio. Avísame con tiempo dónde te bajas.",
        promptEnglish: "The fare is 12 pesos. You are approaching your stop. Request to get off using authentic Mexican transit slang.",
        expectedTip: "Yell '¡Bajan!' or '¡En la esquina bajan, por favor!'.",
        evaluate: (input) => {
          const lower = input.toLowerCase();
          let feedback = {
            translation: `"${input}"`,
            accuracy: "Correcto (Correct)",
            accuracyFeedback: "You requested your stop.",
            cultureFeedback: ""
          };

          if (lower.includes("bajan") || lower.includes("esquina bajan")) {
            feedback.accuracy = "Excelente (Excellent)";
            feedback.accuracyFeedback = "Fabulous! Shouting '¡Bajan!' or '¡En la esquina bajan!' is the ultimate authentic Mexican way to get a driver to stop the vehicle.";
            feedback.cultureFeedback = "🌶️ **Calling Your Stop**: In Mexico, passengers do not usually pull a cord or press a button. Instead, you raise your voice and shout **'¡Bajan!'** (They are getting off) or **'¡En la esquina bajan, por favor!'** (Getting off at the corner, please) so the driver hears you over the noise. It takes a bit of confidence but sounds incredibly local!";
          } else {
            feedback.accuracy = "Bien (Good)";
            feedback.cultureFeedback = "🌶️ **Mexican Slang Tip**: Don Beto used the diminutive **'doce pesitos'** (twelve little pesos). Mexicans frequently use diminutives like *pesitos, ahorita, despacito* to sound softer, friendlier, and more polite.";
          }

          return feedback;
        }
      }
    ]
  },

  'scenario-taxi': {
    id: 'scenario-taxi',
    title: 'Negociando el Taxi',
    characterName: 'Don Sergio',
    emoji: '🚕',
    role: 'Taxista (Cab Driver)',
    difficulty: 'Intermedio',
    description: 'In Mexican cities, street cabs often do not use taximeters for long rides or trips out of their zone. Practice stating your destination and negotiating a flat rate before boarding.',
    objective: 'Politely state you want to go to "la Zona Rosa", ask how much he will charge ("¿Cuánto me cobra?"), and bargain for a lower price when he quotes too high.',
    completionMessage: 'Excellent negotiation! You agreed on a fair rate of 220 pesos with Don Sergio and are on your way to the Zona Rosa. ¡Buen viaje!',
    turns: [
      {
        characterText: "¡Buenas! ¿A dónde lo llevo, jefe? El tráfico está pesado hoy, pero nos vamos rápido.",
        characterSpeech: "Buenas. ¿A dónde lo llevo, jefe? El tráfico está pesado hoy, pero nos vamos rápido.",
        promptEnglish: "Don Sergio greets you. Say you want to go to 'la Zona Rosa' and ask how much he will charge.",
        expectedTip: "Say: 'A la Zona Rosa, por favor. ¿Cuánto me cobra?' or 'Disculpe, ¿cuánto me cobra a la Zona Rosa?'",
        evaluate: (input) => {
          const lower = input.toLowerCase();
          let feedback = {
            translation: `"${input}"`,
            accuracy: "Correcto (Correct)",
            accuracyFeedback: "You stated your destination and asked for the price.",
            cultureFeedback: ""
          };

          if (lower.includes("rosa")) {
            if (lower.includes("cobra") || lower.includes("cobrar")) {
              feedback.accuracy = "Excelente (Excellent)";
              feedback.accuracyFeedback = "Perfect! Asking '¿Cuánto me cobra a...?' is the quintessential Mexican way to ask a taxi driver for a flat-rate fare before getting in.";
            } else {
              feedback.accuracyFeedback += " Good job. Next time, try using the verb 'cobrar' (e.g. '¿Cuánto me cobra?') for the most natural phrasing.";
            }
            feedback.cultureFeedback = "🌶️ **Taxi Culture**: In Mexico, street taxis are extremely common. Unlike in some countries, it is customary to state your destination *before* getting into the cab, and ask **'¿Cuánto me cobra a [destination]?'** to agree on a price, as taximeters (**taxímetros**) are often ignored or not used for longer trips.";
          } else {
            feedback.accuracy = "Bien (Good)";
            feedback.accuracyFeedback += " Be sure to mention 'la Zona Rosa' to fulfill your challenge objective!";
          }

          return feedback;
        }
      },
      {
        characterText: "Huy, jefe... ir hasta la Zona Rosa a esta hora con todo el tráfico de Reforma... le sale en doscientos cincuenta pesos. ¿Cómo ve? ¿Se sube?",
        characterSpeech: "Huy, jefe. ir hasta la Zona Rosa a esta hora con todo el tráfico de Reforma. le sale en doscientos cincuenta pesos. ¿Cómo ve? ¿Se sube?",
        promptEnglish: "Don Sergio quotes 250 pesos. Negotiate a lower rate (e.g., 200 pesos) politely using Mexican bargaining phrasing.",
        expectedTip: "Ask: '¿No me lo deja en doscientos pesos?' or '¿Se puede por doscientos?'",
        evaluate: (input) => {
          const lower = input.toLowerCase();
          let feedback = {
            translation: `"${input}"`,
            accuracy: "Correcto (Correct)",
            accuracyFeedback: "You negotiated a lower price.",
            cultureFeedback: ""
          };

          if (lower.includes("deja") || lower.includes("dejar")) {
            feedback.accuracy = "Excelente (Excellent)";
            feedback.accuracyFeedback = "Fabulous! '¿No me lo deja en...?' is the perfect, polite, and authentic way to request a discount or bargain in Mexico.";
            feedback.cultureFeedback = "🌶️ **El Regateo (Bargaining)**: When bargaining in Mexico, you want to sound polite and soft. Using **'¿No me lo deja en [price]?'** (Won't you leave it at...?) or **'¿Me lo deja más barato?'** is much warmer and more successful than demanding a discount.";
          } else {
            feedback.cultureFeedback = "🌶️ **Negotiation Tip**: To sound completely natural when bargaining, try using the standard formula: **'¿No me lo deja en [price] pesos?'** It works like a charm!";
          }

          if (lower.includes("doscientos") || lower.includes("200")) {
            feedback.accuracyFeedback += " You correctly suggested 200 pesos.";
          }

          return feedback;
        }
      },
      {
        characterText: "Híjole, jefe... doscientos es muy poco por el tráfico. Déjelo en doscientos de una vez... perdón, déjelo en doscientos veinte y ya nos vamos. Es un trato justo, ¿no cree?",
        characterSpeech: "Híjole, jefe. doscientos es muy poco por el tráfico. Déjelo en doscientos de una vez... perdón, déjelo en doscientos veinte y ya nos vamos. Es un trato justo, ¿no cree?",
        promptEnglish: "Don Sergio counters with 220 pesos. Accept the deal and tell him to head out.",
        expectedTip: "Say: 'Está bien, doscientos veinte, trato hecho. ¡Vámonos!'",
        evaluate: (input) => {
          const lower = input.toLowerCase();
          let feedback = {
            translation: `"${input}"`,
            accuracy: "Excelente (Excellent)",
            accuracyFeedback: "Deal closed! You accepted the price and are ready to go.",
            cultureFeedback: "🌶️ **Mexican Expressions**: Don Sergio started with **'Híjole'**—this is one of the most famous Mexican exclamations, used to express surprise, concern, or hesitation (like 'Oh boy!' or 'Jeez!'). Concluding a business deal or taxi negotiation with **'Trato hecho'** (Deal made) and **'¡Vámonos!'** (Let's go!) is perfect Chilango style!"
          };
          return feedback;
        }
      }
    ]
  }
};

// 2. Modular ConversationEngine Gateway Adapter 
// (Fulfills our promise: prepared to plug in Ollama/Cloud APIs in the future)
class ConversationEngine {
  constructor(scenarioId) {
    this.scenarioId = scenarioId;
    this.scenarioData = SCENARIOS[scenarioId];
    this.currentTurn = 0;
    this.engineMode = localStorage.getItem('vocesEngineMode') || 'local';
    this.apiKey = localStorage.getItem('vocesApiKey') || '';
    this.modelName = localStorage.getItem('vocesModelName') || 'gemini-3.5-flash';
    this.conversationHistory = []; // Tracks chat logs for Gemini API context
  }

  getCurrentTurnConfig() {
    return this.scenarioData.turns[this.currentTurn];
  }

  hasNextTurn() {
    if (this.engineMode === 'cloud') {
      // Cloud LLM allows unconstrained dialogue; we set a realistic practice limit of 5 turns
      return this.currentTurn < 5;
    }
    return this.currentTurn < this.scenarioData.turns.length - 1;
  }

  advanceTurn() {
    this.currentTurn++;
  }

  async processUserInput(userInputText) {
    if (this.engineMode === 'cloud' && this.apiKey) {
      return await this.callGeminiAPI(userInputText);
    } else {
      // Fallback to local heuristic evaluation
      const turnConfig = this.getCurrentTurnConfig();
      return new Promise((resolve) => {
        setTimeout(() => {
          const feedback = turnConfig.evaluate(userInputText);
          resolve(feedback);
        }, 300);
      });
    }
  }

  async callGeminiAPI(userInputText) {
    // Build Structured System Instruction Prompt
    const systemPrompt = `You are roleplaying as ${this.scenarioData.characterName}, whose role is: ${this.scenarioData.role} in a scenario called: "${this.scenarioData.title}".
    The scenario is described as: "${this.scenarioData.description}".
    The user's challenge objective is: "${this.scenarioData.objective}".

    INSTRUCTIONS:
    1. Maintain character strictly! Speak ONLY in authentic, warm, natural central Mexican Spanish (use local phrasing, idioms, and manners).
    2. Respond naturally to the user's latest statement as your character. Keep your character's response short and clear (1-2 sentences).
    3. Also act as their English Coach! Analyze the user's latest Spanish input ("${userInputText}") and evaluate it:
       - Provide a direct English translation of the user's input.
       - Evaluate their Spanish accuracy and phrasing. Give a score: "Excelente", "Correcto", "Bien", or "Inexacto".
       - Provide helpful English coaching feedback on their grammar, pronunciation, and spelling in "accuracyFeedback".
       - Highlight Mexican cultural tips, local vocabulary choices (e.g. why they should use "Me da" instead of "quiero", or "para llevar" instead of "para ir"), or local slang in "cultureTip". Make sure it is specific and highly educational!
    4. CRITICAL: Never use raw double quotes inside your JSON string values (for example: "accuracyFeedback": "You used the word \"Me da\""). If you need to quote a Spanish word or phrase inside your text values, ALWAYS use single quotes (e.g. 'Me da' or 'para llevar') to avoid corrupting the JSON syntax.

    OUTPUT FORMAT:
    You MUST return a JSON object with this exact structure (no markdown formatting, no outer wrappers other than JSON):
    {
      "characterText": "Your character's next spoken line in Spanish (1-2 sentences)",
      "characterTranslation": "English translation of your character's next spoken line in Spanish (1-2 sentences)",
      "translation": "English translation of what the user just said",
      "accuracy": "Excelente | Correcto | Bien | Inexacto",
      "accuracyFeedback": "Detailed, encouraging English feedback on their spelling, grammar, and pronunciation.",
      "cultureTip": "Helpful insight on Mexican culture, slang, or polite phrasing related to this interaction."
    }`;

    // Record user input to active conversation history
    this.conversationHistory.push({
      role: "user",
      parts: [{ text: userInputText }]
    });

    // Construct API request body payloads
    const contents = [
      {
        role: "user",
        parts: [{ text: systemPrompt }]
      },
      ...this.conversationHistory
    ];

    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${this.modelName}:generateContent?key=${this.apiKey}`;

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: contents,
          generationConfig: {
            responseMimeType: "application/json"
          }
        })
      });

      if (!response.ok) {
        const errText = await response.text();
        throw new Error(`API Error: ${response.status} - ${errText}`);
      }

      const json = await response.json();
      const rawText = json.candidates[0].content.parts[0].text;
      
      // Defensive sanitization: Clean any code block markers if returned
      let cleanedText = rawText.trim();
      if (cleanedText.startsWith("```")) {
        cleanedText = cleanedText.replace(/^```json\s*/i, "").replace(/```\s*$/i, "").trim();
      }

      const data = JSON.parse(cleanedText);

      // Record character reply to active conversation history
      this.conversationHistory.push({
        role: "model",
        parts: [{ text: data.characterText }]
      });

      return {
        translation: data.translation,
        accuracy: data.accuracy,
        accuracyFeedback: data.accuracyFeedback,
        cultureFeedback: data.cultureTip,
        dynamicSpeechText: data.characterText,
        characterTranslation: data.characterTranslation
      };
    } catch (err) {
      console.error("Gemini API Error:", err);
      return {
        translation: `Error calling Gemini: ${err.message}`,
        accuracy: "Error",
        accuracyFeedback: "Please check your API key in settings or try again.",
        cultureFeedback: "⚠️ Double-check your internet connection and verify your Gemini API key in the top settings modal."
      };
    }
  }
}

// 3. Application State variables
let activeEngine = null; // Instance of ConversationEngine
let speechSpeed = 0.9;
let speechSynthesisInstance = window.speechSynthesis;
let speechRecognitionInstance = null;
let selectedSpanishVoice = null;

// DOM Elements
const dashboardSection = document.getElementById('dashboard');
const practiceArenaSection = document.getElementById('practiceArena');
const backToDashboardBtn = document.getElementById('backToDashboardBtn');
const scenariosGrid = document.getElementById('scenariosGrid');

const arenaCharacterEmoji = document.getElementById('arenaCharacterEmoji');
const arenaCharacterName = document.getElementById('arenaCharacterName');
const arenaHeader = document.getElementById('arenaHeader');
const scenarioDescription = document.getElementById('scenarioDescription');
const scenarioObjective = document.getElementById('scenarioObjective');
const chatBoard = document.getElementById('chatBoard');

const micBtn = document.getElementById('micBtn');
const textInput = document.getElementById('textInput');
const sendTextBtn = document.getElementById('sendTextBtn');
const systemStatusToast = document.getElementById('systemStatusToast');
const voiceStatusBadge = document.getElementById('voiceStatusBadge');

const speedSlider = document.getElementById('speechSpeed');
const speedDisplay = document.getElementById('speedDisplay');

const coachEmptyState = document.getElementById('coachEmptyState');
const coachFeedbackCard = document.getElementById('coachFeedbackCard');
const coachTranslation = document.getElementById('coachTranslation');
const coachAccuracyTag = document.getElementById('coachAccuracyTag');
const coachAccuracyFeedback = document.getElementById('coachAccuracyFeedback');
const coachCultureFeedback = document.getElementById('coachCultureFeedback');

const celebrationScreen = document.getElementById('celebrationScreen');
const celebrationText = document.getElementById('celebrationText');
const finishScenarioBtn = document.getElementById('finishScenarioBtn');

// Modal Elements
const engineBadge = document.getElementById('engineBadge');
const engineModalOverlay = document.getElementById('engineModalOverlay');
const closeEngineModalBtn = document.getElementById('closeEngineModalBtn');

// 4. Scenario Catalog Rendering
function renderScenarioCatalog() {
  scenariosGrid.innerHTML = '';
  
  Object.values(SCENARIOS).forEach(scenario => {
    const card = document.createElement('article');
    card.className = 'scenario-card';
    card.id = scenario.id;
    
    // Set custom visual badge class based on difficulty
    const isMedium = scenario.difficulty === 'Intermedio';
    const badgeText = isMedium ? 'Intermedio (Medium)' : 'Principiante (Easy)';
    const badgeClass = isMedium ? 'difficulty-badge' : 'difficulty-badge';
    
    card.innerHTML = `
      <div class="scenario-image-placeholder">${scenario.emoji}</div>
      <div class="scenario-body">
        <span class="${badgeClass}">${badgeText}</span>
        <h3>${scenario.title}</h3>
        <p>${scenario.description}</p>
        <div class="scenario-meta">
          <span>Goal: ${scenario.turns.length} turns</span>
          <span>Role: ${scenario.characterName} (${scenario.role})</span>
        </div>
      </div>
    `;
    
    card.addEventListener('click', () => startScenarioSession(scenario.id));
    scenariosGrid.appendChild(card);
  });
}

// 5. Audio & Voice Systems Setup
function setupSpeechSynthesis() {
  if (!speechSynthesisInstance) {
    voiceStatusBadge.textContent = "Audio unsupported";
    voiceStatusBadge.style.background = "rgba(192, 57, 43, 0.1)";
    voiceStatusBadge.style.color = "#C0392B";
    return;
  }

  const loadVoices = () => {
    const voices = speechSynthesisInstance.getVoices();
    
    // Find Mexican Spanish voice
    let mxVoice = voices.find(v => v.lang === 'es-MX' || v.lang.includes('es_MX'));
    let genericEsVoice = voices.find(v => v.lang.startsWith('es'));
    
    if (mxVoice) {
      selectedSpanishVoice = mxVoice;
      voiceStatusBadge.textContent = `Voz: es-MX (${mxVoice.name})`;
    } else if (genericEsVoice) {
      selectedSpanishVoice = genericEsVoice;
      voiceStatusBadge.textContent = `Voz: ${genericEsVoice.lang} (Standard Spanish)`;
    } else {
      voiceStatusBadge.textContent = "Default Browser TTS";
    }
  };

  loadVoices();
  if (speechSynthesisInstance.onvoiceschanged !== undefined) {
    speechSynthesisInstance.onvoiceschanged = loadVoices;
  }
}

function speakText(text) {
  if (!speechSynthesisInstance || !selectedSpanishVoice) return;
  speechSynthesisInstance.cancel();
  
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = selectedSpanishVoice;
  utterance.rate = speechSpeed;
  utterance.pitch = 1.0;
  
  speechSynthesisInstance.speak(utterance);
}

function setupSpeechRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  
  if (!SpeechRecognition) {
    systemStatusToast.textContent = "Mic unsupported. Please type your replies!";
    micBtn.disabled = true;
    micBtn.style.opacity = 0.5;
    return;
  }

  speechRecognitionInstance = new SpeechRecognition();
  speechRecognitionInstance.lang = 'es-MX';
  speechRecognitionInstance.interimResults = false;
  speechRecognitionInstance.maxAlternatives = 1;

  speechRecognitionInstance.onstart = () => {
    micBtn.classList.add('listening');
    systemStatusToast.textContent = "🎙️ Listening... Speak in Spanish!";
    systemStatusToast.style.color = "var(--accent-pink)";
  };

  speechRecognitionInstance.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    textInput.value = transcript;
    systemStatusToast.textContent = "Speech captured! Review and press Enter.";
    systemStatusToast.style.color = "var(--success)";
    
    setTimeout(() => {
      if (textInput.value === transcript) {
        handleUserSubmit(transcript);
      }
    }, 1200);
  };

  speechRecognitionInstance.onerror = (event) => {
    console.error("Speech Recognition Error:", event.error);
    micBtn.classList.remove('listening');
    if (event.error === 'not-allowed') {
      systemStatusToast.textContent = "⚠️ Mic permission denied. Please allow microphone or type.";
    } else {
      systemStatusToast.textContent = `⚠️ Error: ${event.error}. Please try again or type.`;
    }
    systemStatusToast.style.color = "var(--danger)";
  };

  speechRecognitionInstance.onend = () => {
    micBtn.classList.remove('listening');
  };
}

// 6. Dialogue Session Managers
function startScenarioSession(scenarioId) {
  activeEngine = new ConversationEngine(scenarioId);
  
  // Transition views
  dashboardSection.classList.add('hidden');
  practiceArenaSection.classList.remove('hidden');
  celebrationScreen.classList.add('hidden');
  
  // Update header details
  arenaCharacterEmoji.textContent = activeEngine.scenarioData.emoji;
  arenaCharacterName.textContent = activeEngine.scenarioData.characterName;
  scenarioDescription.textContent = activeEngine.scenarioData.description;
  scenarioObjective.textContent = activeEngine.scenarioData.objective;
  
  if (activeEngine.scenarioData.difficulty === 'Intermedio') {
    arenaHeader.className = 'pane-header accented';
  } else {
    arenaHeader.className = 'pane-header';
  }

  chatBoard.innerHTML = '';
  textInput.value = '';
  coachEmptyState.classList.remove('hidden');
  coachFeedbackCard.classList.add('hidden');

  loadNextCharacterTurn();
}

function loadNextCharacterTurn() {
  const turnData = activeEngine.getCurrentTurnConfig();
  if (!turnData) return;

  addChatBubble('character', activeEngine.scenarioData.characterName, turnData.characterText, turnData.characterSpeech);
  
  systemStatusToast.textContent = `Goal: ${turnData.promptEnglish}`;
  systemStatusToast.style.color = "var(--primary)";

  speakText(turnData.characterSpeech);
}

async function handleUserSubmit(userInputText) {
  if (!userInputText.trim()) return;

  if (speechRecognitionInstance) {
    speechRecognitionInstance.stop();
  }

  textInput.value = '';
  addChatBubble('user', 'You', userInputText);

  // process through the modular adapter
  const feedback = await activeEngine.processUserInput(userInputText);
  renderCoachFeedback(feedback);

  if (activeEngine.hasNextTurn()) {
    activeEngine.advanceTurn();
    setTimeout(() => {
      // In cloud mode, the next character turn is dynamically returned by Gemini API!
      if (activeEngine.engineMode === 'cloud' && feedback.dynamicSpeechText) {
        addChatBubble('character', activeEngine.scenarioData.characterName, feedback.dynamicSpeechText, feedback.dynamicSpeechText, feedback.characterTranslation);
        speakText(feedback.dynamicSpeechText);
        systemStatusToast.textContent = "Your turn! Respond organically.";
        systemStatusToast.style.color = "var(--primary)";
      } else {
        loadNextCharacterTurn();
      }
    }, 3000);
  } else {
    setTimeout(() => {
      triggerCelebration();
    }, 2000);
  }
}

function addChatBubble(sender, name, text, speechText = null, translationText = null) {
  const bubble = document.createElement('article');
  bubble.className = `chat-bubble ${sender}`;
  
  // Auto-resolve translation inside the flat lookup for local scenarios
  if (!translationText && sender === 'character') {
    translationText = LOCAL_TRANSLATIONS[text];
  }

  let playAudioBtnHtml = '';
  let translateBtnHtml = '';
  if (sender === 'character' && speechText) {
    playAudioBtnHtml = `<button class="speech-audio-btn" data-speech="${speechText}" title="Repeat audio" aria-label="Repeat character audio">🔊</button>`;
    if (translationText) {
      translateBtnHtml = `<button class="translate-bubble-btn" title="Translate response" aria-label="Translate character response">🌐</button>`;
    }
  } else if (sender === 'user') {
    playAudioBtnHtml = `<button class="speech-audio-btn" data-speech="${text}" title="Speak my response" aria-label="Hear my spoken text">🔊</button>`;
  }

  let translationParagraph = '';
  if (translationText) {
    translationParagraph = `<p class="bubble-translation hidden">${translationText}</p>`;
  }

  bubble.innerHTML = `
    <div class="bubble-meta">
      <span>${name}</span>
      ${playAudioBtnHtml}
      ${translateBtnHtml}
    </div>
    <div class="bubble-content">
      <p>${text}</p>
      ${translationParagraph}
    </div>
  `;
  
  chatBoard.appendChild(bubble);
  chatBoard.scrollTop = chatBoard.scrollHeight;

  const audioBtn = bubble.querySelector('.speech-audio-btn');
  if (audioBtn) {
    audioBtn.addEventListener('click', (e) => {
      const speechVal = e.currentTarget.getAttribute('data-speech');
      speakText(speechVal);
    });
  }

  const translateBtn = bubble.querySelector('.translate-bubble-btn');
  if (translateBtn) {
    translateBtn.addEventListener('click', () => {
      const transText = bubble.querySelector('.bubble-translation');
      if (transText) {
        transText.classList.toggle('hidden');
      }
    });
  }
}

function renderCoachFeedback(feedback) {
  coachEmptyState.classList.add('hidden');
  coachFeedbackCard.classList.remove('hidden');

  coachTranslation.textContent = feedback.translation;
  coachAccuracyTag.textContent = feedback.accuracy;
  
  if (feedback.accuracy.includes("Excelente")) {
    coachAccuracyTag.className = "feedback-tag correct";
  } else if (feedback.accuracy.includes("Correcto") || feedback.accuracy.includes("Bien")) {
    coachAccuracyTag.className = "feedback-tag tip";
  } else {
    coachAccuracyTag.className = "feedback-tag";
    coachAccuracyTag.style.background = "rgba(192, 57, 43, 0.1)";
    coachAccuracyTag.style.color = "var(--danger)";
    coachAccuracyTag.style.border = "1px solid rgba(192, 57, 43, 0.2)";
  }

  coachAccuracyFeedback.innerHTML = feedback.accuracyFeedback;

  if (feedback.cultureFeedback) {
    coachCultureFeedback.parentElement.style.display = 'block';
    coachCultureFeedback.innerHTML = feedback.cultureFeedback;
  } else {
    coachCultureFeedback.parentElement.style.display = 'none';
  }

  document.getElementById('coachBody').scrollTop = 0;
}

function triggerCelebration() {
  celebrationText.textContent = activeEngine.scenarioData.completionMessage;
  celebrationScreen.classList.remove('hidden');
  speakText("¡Excelente trabajo! ¡Felicidades!");
}

function endScenario() {
  if (speechSynthesisInstance) {
    speechSynthesisInstance.cancel();
  }
  activeEngine = null;
  practiceArenaSection.classList.add('hidden');
  dashboardSection.classList.remove('hidden');
}

// Secure Cryptographic Passcode Verification Logic
const CORRECT_PASSCODE_HASH = '2700fe561093201700789a4c6cd51000b059fa94517da675454b44b4d961e727'; // SHA-256 of 'mexico-practica'

async function checkPasscode(input) {
  const encoder = new TextEncoder();
  const data = encoder.encode(input.trim().toLowerCase());
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hexHash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hexHash === CORRECT_PASSCODE_HASH;
}

// 7. Event Binding & Initialization
function init() {
  // Passcode Overlay Elements
  const passcodeOverlay = document.getElementById('passcodeOverlay');
  const passcodeInput = document.getElementById('passcodeInput');
  const passcodeSubmitBtn = document.getElementById('passcodeSubmitBtn');
  const passcodeError = document.getElementById('passcodeError');

  // Check if already authenticated
  if (localStorage.getItem('vocesValidated') === 'true') {
    passcodeOverlay.classList.add('hidden');
  }

  const performPasscodeVerification = async () => {
    const entered = passcodeInput.value;
    const isCorrect = await checkPasscode(entered);
    if (isCorrect) {
      localStorage.setItem('vocesValidated', 'true');
      passcodeOverlay.style.transition = 'all 0.4s ease-out';
      passcodeOverlay.style.opacity = '0';
      setTimeout(() => {
        passcodeOverlay.classList.add('hidden');
      }, 400);
    } else {
      passcodeError.style.display = 'block';
      passcodeInput.style.borderColor = 'var(--danger)';
      passcodeInput.value = '';
      passcodeInput.focus();
    }
  };

  passcodeSubmitBtn.addEventListener('click', performPasscodeVerification);
  passcodeInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      performPasscodeVerification();
    }
  });

  // Modal Configuration Panel Selectors
  const optLocal = document.getElementById('opt-local');
  const optCloud = document.getElementById('opt-cloud');
  const apiKeyContainer = document.getElementById('apiKeyContainer');
  const geminiApiKey = document.getElementById('geminiApiKey');
  const toggleKeyVisibilityBtn = document.getElementById('toggleKeyVisibilityBtn');
  const geminiModelName = document.getElementById('geminiModelName');

  // Load saved settings
  const savedMode = localStorage.getItem('vocesEngineMode') || 'local';
  const savedKey = localStorage.getItem('vocesApiKey') || '';
  const savedModel = localStorage.getItem('vocesModelName') || 'gemini-3.5-flash';
  geminiApiKey.value = savedKey;
  geminiModelName.value = savedModel;

  const setEngineModeUI = (mode) => {
    if (mode === 'cloud') {
      optCloud.classList.add('active');
      optLocal.classList.remove('active');
      apiKeyContainer.classList.remove('hidden');
      engineBadge.innerHTML = '🤖 Engine: Gemini Cloud';
    } else {
      optLocal.classList.add('active');
      optCloud.classList.remove('active');
      apiKeyContainer.classList.add('hidden');
      engineBadge.innerHTML = '🤖 Engine: Local Heuristics';
    }
  };

  setEngineModeUI(savedMode);

  optLocal.addEventListener('click', () => {
    setEngineModeUI('local');
  });

  optCloud.addEventListener('click', () => {
    setEngineModeUI('cloud');
  });

  toggleKeyVisibilityBtn.addEventListener('click', () => {
    if (geminiApiKey.type === 'password') {
      geminiApiKey.type = 'text';
      toggleKeyVisibilityBtn.textContent = '🙈';
    } else {
      geminiApiKey.type = 'password';
      toggleKeyVisibilityBtn.textContent = '👁️';
    }
  });

  closeEngineModalBtn.addEventListener('click', () => {
    const activeMode = optCloud.classList.contains('active') ? 'cloud' : 'local';
    localStorage.setItem('vocesEngineMode', activeMode);
    localStorage.setItem('vocesApiKey', geminiApiKey.value.trim());
    localStorage.setItem('vocesModelName', geminiModelName.value.trim() || 'gemini-3.5-flash');
    setEngineModeUI(activeMode);
    engineModalOverlay.classList.add('hidden');
  });

  // Render Dynamic Catalog grid from JS SCENARIOS
  renderScenarioCatalog();

  // Audio setup
  setupSpeechSynthesis();
  setupSpeechRecognition();

  // Navigation handlers
  backToDashboardBtn.addEventListener('click', endScenario);
  finishScenarioBtn.addEventListener('click', endScenario);

  // Speed slider
  speedSlider.addEventListener('input', (e) => {
    speechSpeed = parseFloat(e.target.value);
    speedDisplay.textContent = `${speechSpeed.toFixed(1)}x`;
  });

  // Microphone trigger
  micBtn.addEventListener('click', () => {
    if (!speechRecognitionInstance) return;
    if (micBtn.classList.contains('listening')) {
      speechRecognitionInstance.stop();
    } else {
      speechRecognitionInstance.start();
    }
  });

  // Keyboard actions
  sendTextBtn.addEventListener('click', () => {
    handleUserSubmit(textInput.value);
  });

  textInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      handleUserSubmit(textInput.value);
    }
  });

  // Modal dialog togglers
  engineBadge.addEventListener('click', () => {
    engineModalOverlay.classList.remove('hidden');
  });

  engineModalOverlay.addEventListener('click', (e) => {
    if (e.target === engineModalOverlay) {
      engineModalOverlay.classList.add('hidden');
    }
  });

  // Phrasebook audio trigger bindings
  const phraseBtns = document.querySelectorAll('.phrase-play-btn');
  phraseBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const pText = e.currentTarget.getAttribute('data-phrase');
      speakText(pText);
    });
  });
}

window.addEventListener('DOMContentLoaded', init);
