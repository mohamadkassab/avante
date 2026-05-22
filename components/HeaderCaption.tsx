export default function HeaderCaption() 
{
    return (
        <div className="w-full hidden md:block h-[var(--height-header-caption)] bg-[var(--color-header-caption-bg)]">
          <div className="h-full flex justify-between relative items-center max-w-[1440px] mx-auto px-10 md:px-20">
            <div className="text-[length:var(--font-size-header-caption)] text-[var(--color-text-header-caption)]">
                Clean air within. A cleaner world beyond.
            </div>
          </div>
        </div>
    )
}