export default function About() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br dark:text-white flex flex-col mt-3"
      dir="rtl"
    >
      <main className="flex-grow flex  justify-center">
        <section className="container mx-auto max-w-2xl p-10   backdrop-blur-lg rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-6">אודות</h1>
          <div className="prose prose-invert">
            <p className=" font-semibold text-xl text-gray-700 dark:text-gray-300 mb-4">
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
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              למה אנחנו עושים את זה?
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              אנחנו רוצים שלכל אזרח תהיה גישה שווה למידע על הנעשה בכנסת, בלי קשר
              לרקע או לידע קודם. אנחנו מאמינים ששקיפות ונגישות הם המפתח לחברה
              דמוקרטית בריאה.
            </p>
          </section>
        </section>
      </main>
    </div>
  );
}

/*
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 dark:text-white"
      dir="rtl"
    >
      <main className="container mx-auto max-w-2xl p-6 bg-white dark:bg-gray-700 bg-opacity-80 backdrop-blur-lg rounded-lg shadow-xl mt-10">

        <section className="mb-10">
          <h1 className="text-4xl font-bold text-purple-700 dark:text-purple-400 mb-6">
            אודות
          </h1>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            ברוכים הבאים לאתר כנסת info!
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            אנחנו מאמינים שדמוקרטיה חזקה מתחילה באזרחים מעורבים ובקיאים. לכן,
            פיתחנו את הפלטפורמה הזו כדי להנגיש את הנעשה בכנסת עבור כל אזרח,
            בקלות ובבהירות.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            בעזרת טכנולוגיות מתקדמות של בינה מלאכותית, אנו מפשטים את הצעות החוק
            המורכבות ומציגים אותן בצורה ידידותית למשתמש. כך, תוכלו לעקוב אחר
            התהליכים, להבין את ההשלכות ולהביע את דעתכם בצורה מושכלת.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            הצטרפו אלינו עוד היום וקחו חלק פעיל בעיצוב עתיד המדינה!
          </p>
          <nav className="flex gap-4">
            <a
              href="#"
              className="text-purple-700 dark:text-purple-400 hover:underline"
            >
              [קישור לעמוד הבית]
            </a>
            <a
              href="#"
              className="text-purple-700 dark:text-purple-400 hover:underline"
            >
              [קישור לעמוד יצירת קשר]
            </a>
          </nav>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-purple-700 dark:text-purple-400 mb-4">
            למה אנחנו עושים את זה?
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            אנחנו רוצים שלכל אזרח תהיה גישה שווה למידע על הנעשה בכנסת, בלי קשר
            לרקע או לידע קודם. אנחנו מאמינים ששקיפות ונגישות הם המפתח לחברה
            דמוקרטית בריאה.
          </p>
        </section>


        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-purple-700 dark:text-purple-400 mb-4">
            מה אנחנו מציעים?
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>
              <strong>סקירה</strong> פשוטה וברורה של הצעות החוק
            </li>
            <li>
              <strong>כלים</strong> להשוואה בין הצעות שונות
            </li>
            <li>
              <strong>מידע</strong> על השלבים השונים של הצעת החוק
            </li>
            <li>
              <strong>אפשרות</strong> להביע עמדה ולתת משוב
            </li>
          </ul>
        </section>


        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-purple-700 dark:text-purple-400 mb-4">
            הצטרפו למהפכה הדמוקרטית!
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            הירשמו עוד היום ותהיו חלק מהשינוי!
          </p>
          <a
            href="#"
            className="text-purple-700 dark:text-purple-400 hover:underline"
          >
            [קישור להרשמה]
          </a>
          <p className="text-gray-700 dark:text-gray-300 mt-4">
            נשמח לשמוע מכם!
          </p>
          <a
            href="#"
            className="text-purple-700 dark:text-purple-400 hover:underline"
          >
            [קישור לעמוד יצירת קשר]
          </a>
        </section>


        <section>
          <h2 className="text-2xl font-semibold text-purple-700 dark:text-purple-400 mb-4">
            צוות האתר
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>[שמות חברי הצוות ותפקידיהם]</li>
          </ul>
          <nav className="mt-4">
            <a
              href="#"
              className="text-purple-700 dark:text-purple-400 hover:underline"
            >
              [קישורים לפרופילים של חברי הצוות ברשתות החברתיות]
            </a>
          </nav>
        </section>
      </main>
    </div>
  );
}
*/
