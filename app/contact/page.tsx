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
              צרו איתנו קשר
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              אנו מזמינים אתכם לפנות אלינו בכל שאלה, הערה או הצעה.
            </p>
            <div className=" flex text-gray-700 dark:text-gray-300 mb-4">
              <p>כתבו לנו ל-</p>
              &nbsp;
              <a
                href="mailto:contact@knessetinfo.co.il"
                className="hover:underline text-blue-500 dark:text-blue-400"
              >
                contact@knessetinfo.co.il
              </a>
            </div>
          </div>
          <section className="mb-10"></section>
        </section>
      </main>
    </div>
  );
}
