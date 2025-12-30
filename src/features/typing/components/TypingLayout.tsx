interface TypingLayoutProps {
  header: React.ReactNode;
  controlsPanel: React.ReactNode;
  typingArea: React.ReactNode;
  statusBar: React.ReactNode;
}

/*
   This is the main layout component for this application. It arranges the header,
   control panel, typing area, and status bar in a vertical layout.

**/
const TypingLayout = ({
  header,
  controlsPanel,
  typingArea,
  statusBar,
}: TypingLayoutProps) => {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl px-5 mx-auto">
        {header}
        <section className="flex flex-col items-center gap-3 lg:flex-row lg:justify-between lg:items-center lg:gap-0 pb-4 border-b ">
          {statusBar}
          {controlsPanel}
        </section>
        {typingArea}
      </div>
    </div>
  );
};

export default TypingLayout;
