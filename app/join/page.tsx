export default function Join() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br dark:text-gray-300 flex flex-col mt-3"
      dir="rtl"
    >
      <main className="flex-grow flex justify-center">
        <section className="container dark:bg-gray-800 mx-auto max-w-2xl p-10 backdrop-blur-lg rounded-lg shadow-lg">
          <div className="prose prose-invert">
            <p className="font-semibold text-xl text-gray-800 dark:text-gray-300 mb-4">
              הצטרפו אלינו לכנסת
              <span className="text-blue-500 dark:text-blue-400">
                {" "}
                info
              </span>
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              אנו מזמינים אתכם לקחת חלק פעיל בפיתוח ושיפור האתר שלנו. יחד נבנה
              קהילה שמשפיעה, מחזקת את השיח הציבורי ומשפרת את חוויית המשתמש.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              אם יש לכם הצעות, רעיונות או משובים, אתם מוזמנים לשלוח לנו. כל
              פידבק נבחן וניישם במידת האפשר כדי להפוך את האתר למותאם יותר
              לצרכיכם.
            </p>
          </div>
          <section className="mb-10">
            <div className="flex text-gray-700 dark:text-gray-300 mb-4">
              <p>כתבו לנו ל-</p>
              &nbsp;
              <a
                href="mailto:contact@knessetinfo.co.il"
                className="hover:underline text-blue-500 dark:text-blue-400"
              >
                contact@knessetinfo.co.il
              </a>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}
