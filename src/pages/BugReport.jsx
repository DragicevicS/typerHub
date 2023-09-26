import emailjs from "@emailjs/browser";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from "../data/emailInfo";

const BugReport = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      subject: event.target.subject.value,
      description: event.target.description.value,
      from: event.target.from.value,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY).then(
      () => {
        alert(
          "Email sent successfully! Thank you for your time and contribution!"
        );
      },
      (error) => {
        console.log("FAILED...", error);
        alert("Failed to send email.");
      }
    );
  };
  return (
    <div className="flex flex-col w-full h-full">
      <Header />
      <main className="flex flex-col justify-center items-center flex-grow gap-5 w-full">
        <h2 className="text-2xl">Report Bug or Issue</h2>
        <form
          className="flex flex-col gap-3 w-2/3 max-w-[700px]"
          onSubmit={handleSubmit}
        >
          <div className="relative p-4">
            <input
              type="input"
              className="w-full px-1 py-2 border-b-2 border-gray-400 bg-transparent text-blue-100 outline-none transition-colors duration-300 focus:border-blue-500 focus:placeholder-transparent"
              name="subject"
              id="subject"
              maxLength="100"
              required
            />
            <label
              htmlFor="subject"
              className="absolute top-[-2px] left-5 text-gray-300 pointer-events-none"
            >
              Subject
            </label>
          </div>
          <div className="relative p-4">
            <textarea
              className="w-full p-2 border-b-2 border-gray-400 bg-transparent text-blue-100 outline-none transition-colors duration-300 focus:border-blue-500 focus:placeholder-transparent resize-none"
              name="description"
              id="description"
              placeholder="(max 1500 characters)"
              rows="14"
              maxLength="1500"
              required
            />
            <label
              htmlFor="description"
              className="absolute top-[-5px] left-5 text-gray-300 pointer-events-none"
            >
              Description
            </label>
          </div>
          <div className="relative p-4">
            <input
              type="input"
              className="w-full px-1 py-2 border-b-2 border-gray-400 bg-transparent text-blue-100 outline-none transition-colors duration-300 focus:border-blue-500 focus:placeholder-transparent"
              name="from"
              id="from"
              placeholder="(optional)"
            />
            <label
              htmlFor="from"
              className="absolute top-[-2px] left-5 text-gray-300 pointer-events-none"
            >
              From
            </label>
          </div>
          <button
            type="submit"
            className="w-max h-min px-5 py-1 m-auto font-cursive text-blue-100 bg-gray-600 hover:bg-blue-100 hover:text-gray-900 ease-in-out duration-500"
          >
            Send
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default BugReport;
