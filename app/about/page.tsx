export default function About() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br dark:text-gray-300  flex flex-col mt-3"
      dir="rtl"
    >
      <main className="flex-grow flex  justify-center">
        <section className="container dark:bg-gray-800 mx-auto max-w-2xl p-10 backdrop-blur-lg rounded-lg shadow-lg">

          <div className="prose prose-invert">
            <p className=" font-semibold text-xl text-gray-800 dark:text-gray-300 mb-4">
              ברוכים הבאים לאתר כנסת{" "}
              <span className="text-blue-500 dark:text-blue-400">info</span>
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              אנחנו מאמינים שדמוקרטיה חזקה מתחילה באזרחים מעורבים ובקיאים. לכן,
              פיתחנו את הפלטפורמה הזו כדי להנגיש את הנעשה בכנסת עבור כל אזרח,
              בקלות ובבהירות.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              בעזרת טכנולוגיות מתקדמות של בינה מלאכותית, אנו מפשטים את הצעות
              החוק המורכבות ומציגים אותן בצורה ידידותית למשתמש. כך, תוכלו לעקוב
              אחר התהליכים, להבין את ההשלכות ולהביע את דעתכם בצורה מושכלת.
            </p>
          </div>
          {/*<section className="mb-10">
            <h2 className="text-xl font-semibold text-black dark:text-gray-300 mb-4">
              למה אנחנו עושים את זה?
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              אנחנו רוצים שלכל אזרח תהיה גישה שווה למידע על הנעשה בכנסת, בלי קשר
              לרקע או לידע קודם. אנחנו מאמינים ששקיפות ונגישות הם המפתח לחברה
              דמוקרטית בריאה.
            </p>
          </section>*/}
        </section>
      </main>
    </div>
  );
}

