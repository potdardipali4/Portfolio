import { AsyncPipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FileIconComponent } from '@shared/components/file-icon/file-icon.component';
import { GithubIconComponent } from '@shared/components/github-icon/github-icon.component';
import { LinkButtonComponent } from '@shared/components/link-button/link-button.component';
import { LinkedinIconComponent } from '@shared/components/linkedin-icon/linkedin-icon.component';
import { XIconComponent } from '@shared/components/x-icon/x-icon.component';
import { MainService } from '@shared/services/main.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.interface';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    XIconComponent,
    LinkedinIconComponent,
    GithubIconComponent,
    LinkButtonComponent,
    FileIconComponent,
    AsyncPipe,
  ],
  template: `
    <section class="flex flex-col justify-between gap-5">
      <img
        src="./assets/profile.jpg"
        alt="Dipali Potdar profile image"
        width="150"
        height="150"
        class="rounded-full border-4 border-cyan-500"
      />
      <div class="flex flex-col gap-2">
        <div>
          <span class="text-sm font-semibold text-neutral-400 md:text-base"
            >Hey! I'm</span
          >
          <h1 class="text-5xl font-semibold md:text-6xl">
            Dipali Potdar
          </h1>
        </div>
        <h2 class="text-lg text-cyan-500 md:text-xl">
        Angular web developer
        </h2>
        <p class="text-sm font-semibold text-neutral-400 md:text-base">
          Web Developer | Creating Elegant and Functional
          Online Spaces | Transforming Ideas into Interactive Experiences |
          Crafting Code with Creativity and Minimalism.
        </p>
      </div>
      <div class="flex gap-3">
        <app-link-button
          href="https://www.linkedin.com/in/dipali-potdar-31ba5b204"
          title="Linkedin page"
        >
          <app-linkedin-icon class="h-5" />
        </app-link-button>
        <!-- <app-link-button
          href="https://x.com/UrielSpiridione/"
          title="X/Twitter page"
        >
          <app-x-icon class="h-5" /> -->
        <!-- </app-link-button> -->
        <app-link-button
          href="https://github.com/potdardipali4"
          title="Github profile"
        >
          <app-github-icon class="h-5" />
        </app-link-button>
        <!-- <app-link-button href="https://cv.uspiri.com/" title="Curriculim Vitae">
          <app-file-icon class="h-5 w-5" />
        </app-link-button> -->
      </div>
    </section>
  `,
})
export class HeaderComponent implements OnInit {
  private mainService = inject(MainService);
  user!: Observable<User>;

  ngOnInit() {
    this.user = this.mainService.getUser();
  }
}
