import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/images/house1.jpg" alt="Eiendom" />
          <AvatarFallback>S</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Storgata 1, Oslo</p>
          <p className="text-sm text-muted-foreground">Leilighet, 3. etasje</p>
        </div>
        <div className="ml-auto font-medium">4 500 000 kr</div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage src="/images/house2.jpg" alt="Eiendom" />
          <AvatarFallback>KG</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">
            Kongens gate 10, Bergen
          </p>
          <p className="text-sm text-muted-foreground">Enebolig, 2. etasje</p>
        </div>
        <div className="ml-auto font-medium">6 000 000 kr</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/images/house3.jpg" alt="Eiendom" />
          <AvatarFallback>M</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">
            Munkegata 5, Trondheim
          </p>
          <p className="text-sm text-muted-foreground">Leilighet, 1. etasje</p>
        </div>
        <div className="ml-auto font-medium">3 200 000 kr</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/images/house4.jpg" alt="Eiendom" />
          <AvatarFallback>M</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Sjøgata 15, Bodø</p>
          <p className="text-sm text-muted-foreground">Leilighet, 4. etasje</p>
        </div>
        <div className="ml-auto font-medium">3 800 000 kr</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/images/house5.jpg" alt="Eiendom" />
          <AvatarFallback>S</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">
            Strandgata 7, Tromsø
          </p>
          <p className="text-sm text-muted-foreground">Leilighet, 2. etasje</p>
        </div>
        <div className="ml-auto font-medium">3 500 000 kr</div>
      </div>
    </div>
  );
}
