export default function HeaderCaption() 
{
    return (
        <div className="w-full h-[var(--height-header-caption)] bg-[var(--color-header-caption-bg)]">
          <div className="h-full flex justify-between relative items-center max-w-[var(--container-max-width)] mx-auto px-[var(--section-px)] lg:px-[var(--section-px-lg)]">
            <div className="text-[length:var(--font-size-header-caption)] text-[var(--color-text-header-caption)]">
                Clean air within. A cleaner world beyond.
            </div>
          </div>
        </div>
    )
}