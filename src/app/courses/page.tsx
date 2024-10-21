export default async function Apply() {
  await new Promise((resolve) => {
    setTimeout(resolve, 5000);
  });
  return (
    <h1 className="m-48 text-center text-4xl font-extrabold">
      Courses Page is coming soon!
    </h1>
  );
}
