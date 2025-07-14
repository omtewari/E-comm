const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-blue-600">About Us</h1>

      <p className="text-gray-700 text-lg">
        Welcome to <strong>E-Shop</strong> — your trusted online store for everything from electronics to clothing and accessories.
      </p>

      <p className="text-gray-600">
        Our mission is to deliver high-quality products at unbeatable prices, backed by reliable customer support and smooth delivery.
        Whether you're shopping for daily essentials or treating yourself to something special, we're here to make your shopping experience enjoyable and hassle-free.
      </p>

      <p className="text-gray-600">
        This website is a frontend project built using <strong>React</strong>, <strong>TypeScript</strong>, <strong>Redux</strong>, <strong>Tailwind CSS</strong>, and <strong>shadcn/ui</strong>. It uses the <a className="text-blue-500 underline" href="https://fakestoreapi.com" target="_blank" rel="noopener noreferrer">FakeStoreAPI</a> to simulate product data.
      </p>

      <p className="text-gray-500 text-sm">
        Built by Om Tewari 💻 as part of a full-stack e-commerce practice project.
      </p>
    </div>
  );
};

export default About;
