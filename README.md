# fproject_node
Web Server for the prediction api

**Predict tweets**
----
  Returns json data with the tweets and their predictions.

* **URL**

  /api/predict

* **Method:**

  `GET`

* **Required Data Params**

  input=[string]
  twitter_api=yes

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ tweets_list :["Hoy fue un gran dia"], predictions : [0.9959123512] }`
 
* **Error Response:**

  * **Code:** 403 BAD REQUEST <br />
    **Content:** `{ error : "Bad request, no text query." }`

* **Request example:**

* GET /api/predict/input=messi&twitter_api=yes

* **Response example:**

``` 
{
    "tweets_list": [
        "#Rusia2018 ⚽️🇦🇷 #Chancalay entrenó este martes con la Selección en Rusia. #Messi estuvo atento a sus ejercicios. https://t.co/6ddqHzuIXP",
        "En selección \n🇪🇸Piqué, Alba, Busquets, Iniesta\n🇦🇷#Messi, Mascherano\n🇫🇷Digne, Umtiti\n🇧🇷Paulinho\n🇩🇪Ter Stegen\n🇭🇷Rakit… https://t.co/iDX8ckxzte",
        "🔵🔴¿La primera, segunda o tercera? Entra en nuestra tienda y llévate el 🔟 de #Messi https://t.co/QyqVsD2QEQ https://t.co/77yN8SA6j4",
        "En Rusia es mas conocida #NataliaOreiro que #Messi, no se merecen el mundial.",
        "El propio Cristiano y todo el patetico madridismo dicen que sera pichichi en Liga. Les recuerdo que esta 10 goles abajo de #Messi",
        "acabo de leer que @arevalo_martin va a entrevistar a #Messi. Envidia sana quien pudiera estar al lado de el .",
        "Feliz día a nuestra periodista deportiva estrella del mundo y del éter, aguante @JorgelinaRocca sos nuestra #Messi… https://t.co/n1BVMQe11Y",
        "Indumentaria de Argentina para el mundial #Messi https://t.co/jg1ejxqJpA",
        "#Messi mete a #CristianoRonaldo en un Top Secret que revoluciona el #Barça https://t.co/fWFBvqlRy5 https://t.co/Cxac5OyppZ",
        "#Messi no se lo cree: la última locura de #CristianoRonaldo en el #RealMadrid https://t.co/BHpnnQPylA https://t.co/LqJ7VncQK3"
    ],
    "predictions": [
        0.9960891008377075,
        0.9999598264694214,
        0.9999988079071045,
        0.9533662796020508,
        0.7578751444816589,
        0.15446874499320984,
        0.9628032445907593,
        0.9984309077262878,
        0.9984787106513977,
        0.24512623250484467
    ]
}
``` 
