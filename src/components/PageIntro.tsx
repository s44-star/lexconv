export function PageIntro({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <div className="container-page pt-14 sm:pt-20">
      <h1 className="max-w-[20ch] text-[2.25rem] font-semibold leading-[1.08] sm:text-[3rem]">
        {title}
      </h1>
      {children ? <div className="mt-5 max-w-[60ch] text-lg text-muted">{children}</div> : null}
    </div>
  );
}
