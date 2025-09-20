import { Building2, Hammer } from "lucide-react"

export function Logo() {
  return (
    <div className="flex items-center space-x-3">
      <div className="relative">
        <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
          <Building2 className="h-6 w-6 text-primary-foreground" />
        </div>
        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-accent rounded-full flex items-center justify-center">
          <Hammer className="h-2.5 w-2.5 text-accent-foreground" />
        </div>
      </div>

      <div className="flex flex-col">
        <h1 className="text-2xl font-bold text-primary leading-none tracking-tight">Kanishka</h1>
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Construction</span>
      </div>
    </div>
  )
}
