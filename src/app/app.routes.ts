import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


import { MainComponent } from "./components/main/main.component";
import { InmoovComponentComponent } from "./components/inmoov-component/inmoov-component.component";

import { MarketingComponent } from "./components/marketing/marketing.component";
import { AGVComponent } from "./components/agv/agv.component";
import { DonkeyCarComponent } from "./components/donkey-car/donkey-car.component";
import { PatineteComponent } from "./components/patinete/patinete.component";

export const routes: Routes = [
    { path: '', component:  MainComponent},
    { path: 'Inmoov', component: InmoovComponentComponent },
    { path: 'Marketing', component: MarketingComponent },
    { path: 'AGV', component: AGVComponent },
    { path: 'Donkey', component: DonkeyCarComponent },
    { path: 'Patinete', component: PatineteComponent }

    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
