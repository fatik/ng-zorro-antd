# ServiceAnt Integration Guide

Complete guide for integrating ServiceAnt theme into your Angular application.

See also: [Quick Start README](README.md)

---

## Table of Contents

1. [Installation](#installation)
2. [Configuration](#configuration)
3. [Usage Examples](#usage-examples)
4. [Custom Components](#custom-components)
5. [Theming Customization](#theming-customization)
6. [Migration from Tailwind](#migration-from-tailwind)
7. [Troubleshooting](#troubleshooting)

---

## Installation

### Prerequisites

- Angular 18+ or 19+
- NG-ZORRO Ant Design installed
- LESS preprocessor

### Install Dependencies

```bash
npm install ng-zorro-antd less --save
```

### Copy ServiceAnt Files

**Option 1: Manual Copy**
```bash
# Copy entire package
cp -r serviceant-package /path/to/your-app/

# Or copy just the theme
mkdir -p src/styles/themes
cp serviceant-package/styles/serviceant.less src/styles/themes/
```

**Option 2: NPM Package** (if published)
```bash
npm install @serviceant/ng-theme
```

---

## Configuration

### 1. Update angular.json

Add LESS configuration:

```json
{
  "projects": {
    "your-app": {
      "architect": {
        "build": {
          "options": {
            "styles": [
              "src/styles.less"
            ],
            "stylePreprocessorOptions": {
              "includePaths": [
                "node_modules",
                "src"
              ]
            }
          }
        },
        "test": {
          "options": {
            "styles": [
              "src/styles.less"
            ],
            "stylePreprocessorOptions": {
              "includePaths": [
                "node_modules",
                "src"
              ]
            }
          }
        }
      }
    }
  }
}
```

### 2. Create or Update styles.less

Rename `src/styles.css` to `src/styles.less` and add:

```less
// Import ServiceAnt theme FIRST
@import 'styles/themes/serviceant.less';

// Import NG-ZORRO SECOND
@import 'ng-zorro-antd/ng-zorro-antd.less';

// Import fonts (or add to index.html)
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');

// Global styles
body {
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #FAFBFC;
}
```

### 3. Configure Angular App

**For Standalone Apps (Angular 14+):**

```typescript
// src/app/app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { provideNzI18n, en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

registerLocaleData(en);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideNzI18n(en_US),
  ]
};
```

**For Module-based Apps:**

```typescript
// src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

registerLocaleData(en);

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### 4. Verify Installation

Run your app:
```bash
npm start
```

Create a test component:
```typescript
import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-test',
  imports: [NzButtonModule],
  template: `<button nz-button nzType="primary">Test ServiceAnt</button>`
})
export class TestComponent {}
```

The button should render with ServicePath green (#74ba54).

---

## Usage Examples

### Basic Components

#### Buttons
```html
<button nz-button nzType="primary">Primary</button>
<button nz-button nzType="default">Default</button>
<button nz-button nzType="dashed">Dashed</button>
<button nz-button nzType="link">Link</button>
```

#### Inputs
```html
<input nz-input placeholder="Enter text" />
<textarea nz-input rows="4" placeholder="Enter description"></textarea>
```

#### Cards
```html
<nz-card nzTitle="User Profile">
  <p>Card content here...</p>
</nz-card>
```

#### Tables
```typescript
import { NzTableModule } from 'ng-zorro-antd/table';

@Component({
  imports: [NzTableModule],
  template: `
    <nz-table [nzData]="data">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        @for (item of data; track item.name) {
          <tr>
            <td>{{ item.name }}</td>
            <td>{{ item.age }}</td>
          </tr>
        }
      </tbody>
    </nz-table>
  `
})
```

### ServiceAnt Wrapper Components

#### Text Input
```typescript
import { SaTextInputComponent } from './serviceant-package/components';

@Component({
  imports: [SaTextInputComponent],
  template: `
    <sa-text-input
      label="Email"
      [value]="email"
      (valueChange)="email = $event"
      type="email"
      placeholder="you@example.com"
      helperText="We'll keep this private"
      [required]="true"
    />
  `
})
export class MyFormComponent {
  email = '';
}
```

#### Info Card
```typescript
import { SaInfoCardComponent } from './serviceant-package/components';

@Component({
  imports: [SaInfoCardComponent],
  template: `
    <sa-info-card title="Project Details">
      <div class="info-row">
        <span class="label">Status:</span>
        <span class="value">Active</span>
      </div>
    </sa-info-card>
  `
})
```

#### Status Pill
```typescript
import { SaPillComponent } from './serviceant-package/components';

@Component({
  imports: [SaPillComponent],
  template: `
    <sa-pill variant="success">Approved</sa-pill>
    <sa-pill variant="warning">Pending</sa-pill>
    <sa-pill variant="error">Rejected</sa-pill>
  `
})
```

---

## Custom Components

### Creating Your Own Wrappers

Follow the ServiceAnt pattern:

```typescript
import { Component, input, output } from '@angular/core';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'sa-dropdown',
  imports: [NzSelectModule, FormsModule],
  template: `
    <div class="form-field">
      <label>{{ label() }}</label>
      <nz-select
        [ngModel]="value()"
        (ngModelChange)="valueChange.emit($event)"
        [nzPlaceHolder]="placeholder()"
      >
        @for (option of options(); track option.value) {
          <nz-option
            [nzValue]="option.value"
            [nzLabel]="option.label"
          ></nz-option>
        }
      </nz-select>
    </div>
  `,
  styles: [`
    .form-field {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    label {
      font-family: 'Open Sans', sans-serif;
      font-size: 12px;
      color: #2b3036;
    }

    :host ::ng-deep .ant-select-selector {
      font-size: 12px !important;
      border-color: #cdd1d5 !important;
    }
  `]
})
export class SaDropdownComponent {
  label = input.required<string>();
  value = input<string>('');
  placeholder = input<string>('Select...');
  options = input<Array<{value: string, label: string}>>([]);
  valueChange = output<string>();
}
```

---

## Theming Customization

### Override Specific Variables

Create a custom theme extending ServiceAnt:

```less
// src/styles/custom-theme.less
@import 'themes/serviceant.less';

// Override specific tokens
@primary-color: #1890ff;  // Change to blue
@font-size-base: 14px;    // Larger base font

// Import NG-ZORRO
@import 'ng-zorro-antd/ng-zorro-antd.less';
```

Then update `styles.less`:
```less
@import 'styles/custom-theme.less';
```

### Common Customizations

```less
// Brand colors
@primary-color: #your-brand-color;
@success-color: #your-success-color;
@error-color: #your-error-color;

// Typography
@font-family: 'Your Font', sans-serif;
@font-size-base: 14px;

// Spacing
@padding-lg: 32px;
@padding-md: 20px;

// Borders
@border-radius-base: 8px;
@border-color-base: #your-border-color;

// Component heights
@height-base: 36px;
```

### Dynamic Theming

For runtime theme switching, use CSS variables:

```typescript
import { Component, inject } from '@angular/core';
import { NzConfigService } from 'ng-zorro-antd/core/config';

@Component({
  template: `
    <button (click)="switchTheme('#74ba54')">ServicePath Green</button>
    <button (click)="switchTheme('#1890ff')">Blue</button>
  `
})
export class ThemeSwitcherComponent {
  private nzConfigService = inject(NzConfigService);

  switchTheme(color: string): void {
    this.nzConfigService.set('theme', { primaryColor: color });
  }
}
```

---

## Migration from Tailwind

### Color Mapping

| Tailwind (Noodled) | ServiceAnt LESS Variable |
|--------------------|--------------------------|
| `text-primary` (#2b3036) | `@text-color` |
| `text-secondary` (#767d84) | `@text-color-secondary` |
| `border-light` (#e5e8ec) | `@border-color-base` |
| `bg-surface-canvas` (#fff) | `@component-background` |
| `bg-surface-bg` (#FAFBFC) | `@body-background` |
| `primary` (#74ba54) | `@primary-color` |

### Spacing Mapping

| Tailwind | ServiceAnt |
|----------|------------|
| `p-1` (4px) | `@padding-xss` |
| `p-2` (8px) | `@padding-xs` |
| `p-3` (12px) | `@padding-sm` |
| `p-4` (16px) | `@padding-md` |
| `p-6` (24px) | `@padding-lg` |

### Component Migration

**Tailwind TextInput → ServiceAnt:**
```typescript
// Before (Tailwind)
<input className="w-full px-2 py-1.5 border border-border-input-normal..." />

// After (ServiceAnt)
<input nz-input placeholder="..." />
// or
<sa-text-input label="..." />
```

**Tailwind Card → ServiceAnt:**
```typescript
// Before
<div className="bg-surface-canvas rounded-md border border-border-light px-6 py-4">

// After
<nz-card nzTitle="...">
// or
<sa-info-card title="...">
```

---

## Troubleshooting

### Styles Not Applying

**Problem:** NG-ZORRO components don't have ServiceAnt colors.

**Solution:**
1. Check import order in `styles.less`:
   ```less
   @import 'serviceant.less';  // MUST be first
   @import 'ng-zorro-antd/ng-zorro-antd.less';
   ```

2. Verify `angular.json` has `stylePreprocessorOptions`:
   ```json
   "stylePreprocessorOptions": {
     "includePaths": ["node_modules", "src"]
   }
   ```

3. Clear build cache:
   ```bash
   rm -rf .angular
   npm start
   ```

### Font Not Loading

**Problem:** Open Sans font not showing.

**Solution:**
Add to `src/index.html`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet">
```

### LESS Build Errors

**Problem:** Build fails with LESS errors.

**Solution:**
1. Install LESS:
   ```bash
   npm install less --save-dev
   ```

2. Ensure file extension is `.less` not `.css`

3. Check for syntax errors in custom LESS files

### Variables Not Overriding

**Problem:** Custom variables don't apply.

**Solution:**
Variables must be defined **before** importing ServiceAnt:

```less
// Correct order
@primary-color: #1890ff;  // Your override
@import 'serviceant.less';

// Wrong order
@import 'serviceant.less';
@primary-color: #1890ff;  // Won't work
```

### Component Styles Look Wrong

**Problem:** Component styles don't match design system.

**Solution:**
Use `::ng-deep` for style penetration:

```typescript
:host ::ng-deep .ant-card {
  border-radius: 4px;
}
```

---

## Additional Resources

- [NG-ZORRO Official Docs](https://ng.ant.design/)
- [Angular Official Docs](https://angular.dev/)
- [LESS Documentation](https://lesscss.org/)
- [ServiceAnt Demo Component](./demo/demo.component.ts)

---

**Need Help?** Create an issue or contact the ServicePath team.
