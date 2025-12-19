import { Component, signal } from '@angular/core';
import { SaTextInputComponent } from '../components/text-input/sa-text-input.component';
import { SaInfoCardComponent } from '../components/info-card/sa-info-card.component';
import { SaPillComponent } from '../components/pill/sa-pill.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { FormsModule } from '@angular/forms';

/**
 * ServiceAnt Demo Component
 *
 * Showcases all ServiceAnt components and NG-ZORRO components
 * styled with the ServiceAnt theme.
 *
 * Use this component to test the theme integration and as
 * a reference for building your own components.
 */
@Component({
  selector: 'sa-demo',
  imports: [
    SaTextInputComponent,
    SaInfoCardComponent,
    SaPillComponent,
    NzButtonModule,
    NzTableModule,
    NzSelectModule,
    NzCheckboxModule,
    NzBreadCrumbModule,
    NzAlertModule,
    FormsModule
  ],
  template: `
    <div class="demo-container">
      <!-- Header -->
      <div class="demo-header">
        <h1>ServiceAnt Design System Demo</h1>
        <p>Complete showcase of ServiceAnt theme with NG-ZORRO components</p>
      </div>

      <!-- Breadcrumb -->
      <nz-breadcrumb class="demo-section">
        <nz-breadcrumb-item>Home</nz-breadcrumb-item>
        <nz-breadcrumb-item>Components</nz-breadcrumb-item>
        <nz-breadcrumb-item>Demo</nz-breadcrumb-item>
      </nz-breadcrumb>

      <!-- Alerts -->
      <div class="demo-section">
        <h2>Alerts</h2>
        <div class="space-y-3">
          <nz-alert nzType="success" nzMessage="Success" nzDescription="Operation completed successfully" [nzCloseable]="true"></nz-alert>
          <nz-alert nzType="info" nzMessage="Information" nzDescription="This is an informational message" [nzCloseable]="true"></nz-alert>
          <nz-alert nzType="warning" nzMessage="Warning" nzDescription="Please review this carefully" [nzCloseable]="true"></nz-alert>
          <nz-alert nzType="error" nzMessage="Error" nzDescription="Something went wrong" [nzCloseable]="true"></nz-alert>
        </div>
      </div>

      <!-- Buttons -->
      <div class="demo-section">
        <h2>Buttons</h2>
        <div class="button-group">
          <button nz-button nzType="primary">Primary</button>
          <button nz-button nzType="default">Default</button>
          <button nz-button nzType="dashed">Dashed</button>
          <button nz-button nzType="link">Link</button>
          <button nz-button nzType="primary" nzDanger>Danger</button>
          <button nz-button nzType="primary" [disabled]="true">Disabled</button>
        </div>
        <div class="button-group" style="margin-top: 12px;">
          <button nz-button nzType="primary" nzSize="large">Large</button>
          <button nz-button nzType="primary">Default</button>
          <button nz-button nzType="primary" nzSize="small">Small</button>
        </div>
      </div>

      <!-- Pills/Tags -->
      <div class="demo-section">
        <h2>Status Pills</h2>
        <div class="pill-group">
          <sa-pill variant="success">Approved</sa-pill>
          <sa-pill variant="warning">Pending</sa-pill>
          <sa-pill variant="error">Rejected</sa-pill>
          <sa-pill variant="primary">Active</sa-pill>
          <sa-pill variant="default">Draft</sa-pill>
        </div>
      </div>

      <!-- Form Components -->
      <div class="demo-section">
        <h2>Form Components</h2>

        <sa-info-card title="User Information">
          <div class="form-grid">
            <sa-text-input
              label="Full Name"
              [value]="name()"
              (valueChange)="name.set($event)"
              placeholder="Enter your name"
              [required]="true"
            />

            <sa-text-input
              label="Email Address"
              type="email"
              [value]="email()"
              (valueChange)="email.set($event)"
              placeholder="you@example.com"
              helperText="We'll never share your email"
              [required]="true"
            />

            <div class="form-field">
              <label>Country</label>
              <nz-select [(ngModel)]="selectedCountry" nzPlaceHolder="Select a country">
                <nz-option nzValue="us" nzLabel="United States"></nz-option>
                <nz-option nzValue="uk" nzLabel="United Kingdom"></nz-option>
                <nz-option nzValue="ca" nzLabel="Canada"></nz-option>
              </nz-select>
            </div>

            <div class="form-field">
              <label>
                <input type="checkbox" [(ngModel)]="agreeToTerms" />
                I agree to the terms and conditions
              </label>
            </div>
          </div>

          <div style="margin-top: 16px;">
            <button nz-button nzType="primary">Save Changes</button>
            <button nz-button style="margin-left: 8px;">Cancel</button>
          </div>
        </sa-info-card>
      </div>

      <!-- Info Cards -->
      <div class="demo-section">
        <h2>Info Cards</h2>
        <div class="card-grid">
          <sa-info-card title="Project Summary">
            <div class="info-grid">
              <div>
                <p class="label">Status</p>
                <p class="value">Active</p>
              </div>
              <div>
                <p class="label">Start Date</p>
                <p class="value">Jan 15, 2025</p>
              </div>
              <div>
                <p class="label">Budget</p>
                <p class="value">$50,000</p>
              </div>
              <div>
                <p class="label">Team Size</p>
                <p class="value">8 members</p>
              </div>
            </div>
          </sa-info-card>

          <sa-info-card title="Performance Metrics">
            <div class="info-grid">
              <div>
                <p class="label">Completion</p>
                <p class="value">78%</p>
              </div>
              <div>
                <p class="label">Tasks Done</p>
                <p class="value">42 / 54</p>
              </div>
              <div>
                <p class="label">On Time</p>
                <p class="value">95%</p>
              </div>
              <div>
                <p class="label">Quality Score</p>
                <p class="value">4.8 / 5.0</p>
              </div>
            </div>
          </sa-info-card>
        </div>
      </div>

      <!-- Table -->
      <div class="demo-section">
        <h2>Data Table</h2>
        <sa-info-card title="Recent Orders">
          <nz-table #basicTable [nzData]="tableData" [nzPageSize]="5">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Status</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              @for (data of basicTable.data; track data.id) {
                <tr>
                  <td>{{ data.id }}</td>
                  <td>{{ data.customer }}</td>
                  <td><sa-pill [variant]="data.statusVariant">{{ data.status }}</sa-pill></td>
                  <td>{{ data.amount }}</td>
                  <td>{{ data.date }}</td>
                </tr>
              }
            </tbody>
          </nz-table>
        </sa-info-card>
      </div>
    </div>
  `,
  styles: [`
    .demo-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 24px;
      background-color: #FAFBFC;
      min-height: 100vh;
      font-family: 'Open Sans', sans-serif;
    }

    .demo-header {
      background-color: #ffffff;
      border: 1px solid #e5e8ec;
      border-radius: 4px;
      padding: 24px;
      margin-bottom: 24px;
    }

    .demo-header h1 {
      margin: 0 0 8px 0;
      font-size: 24px;
      font-weight: 600;
      color: #2b3036;
    }

    .demo-header p {
      margin: 0;
      font-size: 12px;
      color: #767d84;
    }

    .demo-section {
      margin-bottom: 24px;
    }

    h2 {
      font-size: 16px;
      font-weight: 600;
      color: #2b3036;
      margin: 0 0 12px 0;
    }

    .button-group {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }

    .pill-group {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }

    .form-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 16px;
    }

    .form-field {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .form-field label {
      font-size: 12px;
      color: #2b3036;
      font-weight: 400;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 16px;
    }

    .info-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
    }

    .label {
      font-size: 12px;
      color: #767d84;
      margin: 0 0 4px 0;
    }

    .value {
      font-size: 12px;
      color: #2b3036;
      margin: 0;
      font-weight: 600;
    }

    .space-y-3 > * + * {
      margin-top: 12px;
    }

    :host ::ng-deep nz-select {
      width: 100%;
    }

    :host ::ng-deep .ant-select-selector {
      font-family: 'Open Sans', sans-serif !important;
      font-size: 12px !important;
      border-color: #cdd1d5 !important;
    }

    :host ::ng-deep .ant-table {
      font-size: 12px;
    }

    :host ::ng-deep .ant-table-thead > tr > th {
      background-color: #f8f9fa;
      font-weight: 600;
    }
  `]
})
export class ServiceAntDemoComponent {
  name = signal('');
  email = signal('');
  selectedCountry = 'us';
  agreeToTerms = false;

  tableData = [
    {
      id: 'ORD-001',
      customer: 'John Doe',
      status: 'Completed',
      statusVariant: 'success' as const,
      amount: '$1,234.56',
      date: '2025-01-15'
    },
    {
      id: 'ORD-002',
      customer: 'Jane Smith',
      status: 'Pending',
      statusVariant: 'warning' as const,
      amount: '$987.65',
      date: '2025-01-16'
    },
    {
      id: 'ORD-003',
      customer: 'Bob Johnson',
      status: 'Completed',
      statusVariant: 'success' as const,
      amount: '$2,345.67',
      date: '2025-01-17'
    },
    {
      id: 'ORD-004',
      customer: 'Alice Brown',
      status: 'Failed',
      statusVariant: 'error' as const,
      amount: '$543.21',
      date: '2025-01-18'
    },
    {
      id: 'ORD-005',
      customer: 'Charlie Davis',
      status: 'Completed',
      statusVariant: 'success' as const,
      amount: '$3,456.78',
      date: '2025-01-19'
    },
  ];
}
