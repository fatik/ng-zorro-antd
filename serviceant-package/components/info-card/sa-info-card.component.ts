import { Component, input } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';

/**
 * ServiceAnt Info Card Component
 *
 * A card container following ServicePath design patterns:
 * - White background (#ffffff)
 * - Light gray border (#e5e8ec)
 * - 24px horizontal padding
 * - 16px vertical padding
 * - 14px semibold header
 * - 4px border radius
 *
 * @example
 * <sa-info-card title="User Details">
 *   <div class="grid grid-cols-2 gap-4">
 *     <div>
 *       <p class="label">Name</p>
 *       <p class="value">John Doe</p>
 *     </div>
 *   </div>
 * </sa-info-card>
 */
@Component({
  selector: 'sa-info-card',
  imports: [NzCardModule],
  template: `
    <nz-card [nzTitle]="title()" [nzBordered]="true">
      <ng-content />
    </nz-card>
  `,
  styles: [`
    :host {
      display: block;
    }

    :host ::ng-deep .ant-card {
      background-color: #ffffff;
      border: 1px solid #e5e8ec;
      border-radius: 4px;
      box-shadow: none;
    }

    :host ::ng-deep .ant-card-head {
      font-family: 'Open Sans', sans-serif;
      font-size: 14px;
      font-weight: 600;
      color: #2b3036;
      padding: 12px 24px;
      border-bottom: 1px solid #e5e8ec;
      background-color: #ffffff;
    }

    :host ::ng-deep .ant-card-body {
      padding: 16px 24px;
      font-family: 'Open Sans', sans-serif;
      font-size: 12px;
      color: #2b3036;
    }

    :host ::ng-deep .ant-card-head-title {
      padding: 0;
    }
  `]
})
export class SaInfoCardComponent {
  /** Card header title */
  title = input.required<string>();
}
