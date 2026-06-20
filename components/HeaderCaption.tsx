export default function HeaderCaption() 
{
    return (
        <div className="w-full h-[var(--height-header-caption)] bg-[var(--color-header-caption-bg)]">
          <div className="h-full flex justify-between relative items-center max-w-[var(--container-max-width)] mx-auto px-[var(--section-px)] lg:px-[var(--section-px-lg)]">
            <div className="w-fit text-[length:var(--font-size-header-caption)] bg-[image:var(--gradient-caption)] bg-clip-text text-transparent">
                Clean air within. A cleaner world beyond.
            </div>
          </div>
        </div>
    )
}