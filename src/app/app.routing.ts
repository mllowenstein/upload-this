import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Shell } from './shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'import',
      loadChildren: () => import('./pages/export/export.module').then((m) => m.ExportModule),
      data: {
        showInNavbar: true,
        seo: {
          title: 'Upload Me',
          metaTags: [
            { name: 'description', content: 'OSS File Importer' },
            { property: 'og:url', content:'https://upload-me.ca/import' },
          ]
        }
      }
    },
    {
      path: 'analyze',
      loadChildren: () => import('./pages/analyze/analyze.module').then((m) => m.AnalyzeModule),
      data: {
        showInNavbar: true,
        seo: {
          title: 'Upload Me',
          metaTags: [
            { name: 'description', content: 'OSS File Data Processor' },
            { property: 'og:url', content:'https://upload-me.ca/analyze' },
          ]
        }
      }
    },
  ]),
  {
    path: '',
    redirectTo: 'import',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'import',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    })
  ],
  exports: [RouterModule],
})
export class AppRouting { }
