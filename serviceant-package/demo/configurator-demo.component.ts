import { Component, signal } from '@angular/core';
import { ConfiguratorWizardModalComponent } from '../components/configurator-wizard-modal/configurator-wizard-modal.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAlertModule } from 'ng-zorro-antd/alert';

/**
 * Configurator Demo Page
 *
 * Proof of concept page showcasing the Configurator Wizard Modal
 * converted from React/Tailwind (sp-protos) to Angular/NG-ZORRO
 * using the ServiceAnt design system.
 *
 * This demonstrates:
 * - Full-screen modal with complex forms
 * - Editable data tables
 * - Sticky columns and summary panel
 * - ServiceAnt branding (ServicePath green #74ba54, Open Sans, 12px compact)
 */
@Component({
  selector: 'sa-configurator-demo',
  imports: [
    ConfiguratorWizardModalComponent,
    NzButtonModule,
    NzCardModule,
    NzAlertModule
  ],
  template: `
    <div class="demo-page">
      <!-- Page Header -->
      <div class="page-header">
        <h1>Configurator Wizard Demo</h1>
        <p>ServiceAnt Design System - Proof of Concept</p>
      </div>

      <!-- Info Alert -->
      <nz-alert
        nzType="info"
        nzMessage="Design System Conversion"
        nzDescription="This page demonstrates the ConfiguratorWizardModal2 component from sp-protos (React/Tailwind) converted to Angular/NG-ZORRO using the ServiceAnt theme. Click the button below to open the modal."
        [nzCloseable]="false"
        class="demo-alert"
      ></nz-alert>

      <!-- Cards Grid -->
      <div class="cards-grid">
        <!-- Component Info Card -->
        <nz-card nzTitle="Component Details">
          <div class="info-section">
            <h3>Original Component</h3>
            <ul>
              <li><strong>Name:</strong> ConfiguratorWizardModal2.tsx</li>
              <li><strong>Location:</strong> sp-protos/src/components/</li>
              <li><strong>Framework:</strong> React with Tailwind CSS</li>
              <li><strong>Design:</strong> Noodled design system</li>
            </ul>
          </div>

          <div class="info-section">
            <h3>Angular Conversion</h3>
            <ul>
              <li><strong>Component:</strong> ConfiguratorWizardModalComponent</li>
              <li><strong>Framework:</strong> Angular 18+ (Standalone)</li>
              <li><strong>UI Library:</strong> NG-ZORRO Ant Design</li>
              <li><strong>Theme:</strong> ServiceAnt (ServicePath green #74ba54)</li>
            </ul>
          </div>
        </nz-card>

        <!-- Features Card -->
        <nz-card nzTitle="Key Features">
          <ul class="features-list">
            <li>
              <strong>Full-Screen Modal</strong>
              <span>95vw × 95vh responsive layout</span>
            </li>
            <li>
              <strong>Breadcrumb Navigation</strong>
              <span>Section → Group → Pricing hierarchy</span>
            </li>
            <li>
              <strong>Editable Data Tables</strong>
              <span>Toggle edit mode for Chat/Portal channels</span>
            </li>
            <li>
              <strong>Sticky Columns</strong>
              <span>Fixed left column with field labels</span>
            </li>
            <li>
              <strong>Calculated Fields</strong>
              <span>Auto-calculated agent hours & counts</span>
            </li>
            <li>
              <strong>Form Sections</strong>
              <span>Text, labels, choices, and quantity inputs</span>
            </li>
            <li>
              <strong>Summary Panel</strong>
              <span>Sticky right panel with pricing & guidance</span>
            </li>
            <li>
              <strong>ServiceAnt Styling</strong>
              <span>Open Sans 12px, #74ba54 green accents</span>
            </li>
          </ul>
        </nz-card>

        <!-- Design Tokens Card -->
        <nz-card nzTitle="Design Tokens Applied">
          <table class="tokens-table">
            <thead>
              <tr>
                <th>Token</th>
                <th>Noodled</th>
                <th>ServiceAnt</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Primary Color</td>
                <td>#74ba54</td>
                <td>@primary-color</td>
              </tr>
              <tr>
                <td>Text Primary</td>
                <td>#2b3036</td>
                <td>@text-color</td>
              </tr>
              <tr>
                <td>Text Secondary</td>
                <td>#767d84</td>
                <td>@text-color-secondary</td>
              </tr>
              <tr>
                <td>Border Light</td>
                <td>#e5e8ec</td>
                <td>@border-color-base</td>
              </tr>
              <tr>
                <td>Surface Overlay</td>
                <td>#f8f9fa</td>
                <td>@background-color-light</td>
              </tr>
              <tr>
                <td>Font Family</td>
                <td>Open Sans</td>
                <td>@font-family</td>
              </tr>
              <tr>
                <td>Base Font Size</td>
                <td>12px</td>
                <td>@font-size-base</td>
              </tr>
              <tr>
                <td>Border Radius</td>
                <td>4px</td>
                <td>@border-radius-base</td>
              </tr>
            </tbody>
          </table>
        </nz-card>
      </div>

      <!-- Launch Button -->
      <div class="launch-section">
        <button
          nz-button
          nzType="primary"
          nzSize="large"
          (click)="showModal()"
          class="launch-button"
        >
          <span>Open Configurator Wizard</span>
        </button>
        <p class="launch-hint">
          Click to see the full ServiceAnt-themed modal with all features
        </p>
      </div>

      <!-- Modal Component -->
      <sa-configurator-wizard-modal
        [visible]="modalVisible()"
        (visibleChange)="modalVisible.set($event)"
      />
    </div>
  `,
  styles: [`
    .demo-page {
      min-height: 100vh;
      background-color: #FAFBFC;
      padding: 24px;
      font-family: 'Open Sans', sans-serif;
    }

    .page-header {
      background-color: #ffffff;
      border: 1px solid #e5e8ec;
      border-radius: 4px;
      padding: 24px;
      margin-bottom: 24px;
    }

    .page-header h1 {
      margin: 0 0 8px 0;
      font-size: 24px;
      font-weight: 600;
      color: #2b3036;
    }

    .page-header p {
      margin: 0;
      font-size: 14px;
      color: #767d84;
    }

    .demo-alert {
      margin-bottom: 24px;
    }

    .cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 24px;
      margin-bottom: 32px;
    }

    .info-section {
      margin-bottom: 24px;
    }

    .info-section:last-child {
      margin-bottom: 0;
    }

    .info-section h3 {
      font-size: 14px;
      font-weight: 600;
      color: #2b3036;
      margin: 0 0 12px 0;
    }

    .info-section ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .info-section ul li {
      font-size: 12px;
      color: #2b3036;
      margin-bottom: 8px;
      line-height: 1.6;
    }

    .info-section ul li strong {
      color: #2b3036;
      font-weight: 600;
    }

    .features-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .features-list li {
      display: flex;
      flex-direction: column;
      gap: 4px;
      padding: 12px 0;
      border-bottom: 1px solid #e5e8ec;
    }

    .features-list li:last-child {
      border-bottom: none;
    }

    .features-list strong {
      font-size: 12px;
      font-weight: 600;
      color: #2b3036;
    }

    .features-list span {
      font-size: 12px;
      color: #767d84;
    }

    .tokens-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 12px;
    }

    .tokens-table thead {
      background-color: #f8f9fa;
    }

    .tokens-table th {
      padding: 8px 12px;
      text-align: left;
      font-weight: 600;
      color: #2b3036;
      border-bottom: 1px solid #e5e8ec;
    }

    .tokens-table td {
      padding: 8px 12px;
      color: #2b3036;
      border-bottom: 1px solid #e5e8ec;
    }

    .tokens-table tr:last-child td {
      border-bottom: none;
    }

    .tokens-table td:nth-child(2) {
      font-family: monospace;
      color: #74ba54;
    }

    .tokens-table td:nth-child(3) {
      font-family: monospace;
      color: #767d84;
    }

    .launch-section {
      background-color: #ffffff;
      border: 1px solid #e5e8ec;
      border-radius: 4px;
      padding: 48px 24px;
      text-align: center;
    }

    .launch-button {
      font-size: 16px;
      height: 48px;
      padding: 0 32px;
    }

    .launch-hint {
      margin-top: 16px;
      font-size: 12px;
      color: #767d84;
    }

    :host ::ng-deep .ant-card {
      border-radius: 4px;
      border-color: #e5e8ec;
    }

    :host ::ng-deep .ant-card-head {
      font-family: 'Open Sans', sans-serif;
      font-size: 14px;
      font-weight: 600;
      color: #2b3036;
      background-color: #ffffff;
      border-bottom: 1px solid #e5e8ec;
    }

    :host ::ng-deep .ant-card-body {
      font-family: 'Open Sans', sans-serif;
      font-size: 12px;
    }

    :host ::ng-deep .ant-alert {
      border-radius: 4px;
    }

    :host ::ng-deep .ant-alert-message {
      font-family: 'Open Sans', sans-serif;
      font-size: 14px;
      font-weight: 600;
    }

    :host ::ng-deep .ant-alert-description {
      font-family: 'Open Sans', sans-serif;
      font-size: 12px;
    }
  `]
})
export class ConfiguratorDemoComponent {
  modalVisible = signal(false);

  showModal(): void {
    this.modalVisible.set(true);
  }
}
