export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-start gap-4 py-8 md:py-10">
      <div className="w-full text-center justify-center items-center">
        {children}
      </div>
    </section>
  );
}
