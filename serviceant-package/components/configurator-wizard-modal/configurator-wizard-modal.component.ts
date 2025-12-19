import { Component, signal, output, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

/**
 * Configurator Wizard Modal Component
 *
 * A complex, full-screen modal for service configuration with:
 * - Editable data tables with sticky columns
 * - Multiple form sections (text, labels, choices, quantities)
 * - Right-side sticky summary panel
 * - Breadcrumb navigation
 * - ServiceAnt design system styling
 *
 * Converted from React/Tailwind to Angular/NG-ZORRO
 */

interface YearData {
  H1: string;
  H2: string;
  Y2: string;
  Y3: string;
  Y4: string;
  Y5: string;
  Y6: string;
  Y7: string;
  Y8: string;
  Y9: string;
  Y10: string;
  [key: string]: string;
}

interface ChannelData {
  contactVolume: YearData;
  contactDistribution: YearData;
  aht: YearData;
}

@Component({
  selector: 'sa-configurator-wizard-modal',
  imports: [
    CommonModule,
    FormsModule,
    NzModalModule,
    NzButtonModule,
    NzInputModule,
    NzSelectModule,
    NzCheckboxModule,
    NzIconModule,
    NzInputNumberModule
  ],
  template: `
    <nz-modal
      [nzVisible]="visible()"
      [nzClosable]="false"
      [nzFooter]="null"
      [nzWidth]="'95vw'"
      [nzBodyStyle]="{ padding: '0', height: '95vh', display: 'flex', flexDirection: 'column' }"
      [nzMaskClosable]="true"
      (nzOnCancel)="handleClose()"
      (nzVisibleChange)="onVisibleChange($event)"
    >
      <ng-container *nzModalContent>
      <!-- Modal Header with Breadcrumb -->
      <div class="modal-header">
        <div class="header-content">
          <div class="breadcrumb-section">
            <h3>Configurator Wizard</h3>
            <span class="separator">|</span>
            <div class="breadcrumb">
              <span>A Section</span>
              <i nz-icon nzType="right" nzTheme="outline"></i>
              <span>Some Group</span>
              <i nz-icon nzType="right" nzTheme="outline"></i>
              <span class="active">Pricing</span>
            </div>
          </div>
          <button nz-button nzType="text" (click)="handleClose()">
            <i nz-icon nzType="close" nzTheme="outline"></i>
          </button>
        </div>
      </div>

      <!-- Title and Actions Row -->
      <div class="title-actions-row">
        <h4>Service Desk (Flex) - with New Erlang Calculator</h4>
        <div class="actions">
          <button nz-button (click)="handleClose()">Cancel</button>
          <button nz-button>Previous</button>
          <button nz-button nzType="primary">Next</button>
        </div>
      </div>

      <!-- Main Content Area -->
      <div class="modal-content">
        <div class="content-layout">
          <!-- Left Side - Forms and Tables -->
          <div class="left-panel">
            <!-- Chat Channel Requirements -->
            <div class="section-card">
              <div class="section-header">
                <h3>Chat Channel Requirements</h3>
                <button nz-button nzType="text" (click)="chatEditMode.set(!chatEditMode())">
                  <i nz-icon nzType="edit" nzTheme="outline"></i>
                </button>
              </div>

              <table class="requirements-table">
                <tbody>
                  <tr>
                    <td>SLA Chat</td>
                    <td>
                      <nz-select [(ngModel)]="chatRequirements.sla" class="full-width">
                        <nz-option nzValue="85% in 60 Seconds" nzLabel="85% in 60 Seconds"></nz-option>
                        <nz-option nzValue="90% in 60 Seconds" nzLabel="90% in 60 Seconds"></nz-option>
                        <nz-option nzValue="80% in 90 Seconds" nzLabel="80% in 90 Seconds"></nz-option>
                      </nz-select>
                    </td>
                  </tr>
                  <tr>
                    <td>Hours of Support (Coverage) Chat</td>
                    <td>
                      <nz-select [(ngModel)]="chatRequirements.hoursOfSupport" class="full-width">
                        <nz-option nzValue="5x12" nzLabel="5x12"></nz-option>
                        <nz-option nzValue="24x7" nzLabel="24x7"></nz-option>
                        <nz-option nzValue="8x5" nzLabel="8x5"></nz-option>
                      </nz-select>
                    </td>
                  </tr>
                  <tr>
                    <td>Callbacks Chat</td>
                    <td>
                      <nz-select [(ngModel)]="chatRequirements.callbacks" class="full-width">
                        <nz-option nzValue="10% (Unisys Strategy)" nzLabel="10% (Unisys Strategy)"></nz-option>
                        <nz-option nzValue="5% (Unisys Strategy)" nzLabel="5% (Unisys Strategy)"></nz-option>
                        <nz-option nzValue="15% (Unisys Strategy)" nzLabel="15% (Unisys Strategy)"></nz-option>
                      </nz-select>
                    </td>
                  </tr>
                  <tr>
                    <td>Contact Concurrency Chat</td>
                    <td>
                      <nz-select [(ngModel)]="chatRequirements.contactConcurrency" class="full-width">
                        <nz-option nzValue="2.00 Concurrent Contacts" nzLabel="2.00 Concurrent Contacts"></nz-option>
                        <nz-option nzValue="1.00 Concurrent Contacts" nzLabel="1.00 Concurrent Contacts"></nz-option>
                        <nz-option nzValue="3.00 Concurrent Contacts" nzLabel="3.00 Concurrent Contacts"></nz-option>
                      </nz-select>
                    </td>
                  </tr>
                  <tr>
                    <td>Translation Chat</td>
                    <td>
                      <nz-select [(ngModel)]="chatRequirements.translation" class="full-width">
                        <nz-option nzValue="No Translation" nzLabel="No Translation"></nz-option>
                        <nz-option nzValue="Spanish Translation" nzLabel="Spanish Translation"></nz-option>
                        <nz-option nzValue="French Translation" nzLabel="French Translation"></nz-option>
                      </nz-select>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div class="table-subheader">
                <h4>Title of Grid</h4>
                <button nz-button nzType="text">
                  <i nz-icon nzType="edit" nzTheme="outline"></i>
                </button>
              </div>

              <div class="data-table-wrapper">
                <table class="data-table">
                  <thead>
                    <tr>
                      <th class="sticky-col"></th>
                      @for (year of years; track year) {
                        <th>{{ year }}</th>
                      }
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="sticky-col">
                        <div class="field-label">Contact Volume Chat</div>
                        <div class="field-description">Chat Contacts per Month</div>
                      </td>
                      @for (year of years; track year) {
                        <td>
                          @if (chatEditMode()) {
                            <input
                              nz-input
                              [(ngModel)]="chatArrayData.contactVolume[year]"
                              class="table-input"
                            />
                          } @else {
                            <span>{{ chatArrayData.contactVolume[year] }}</span>
                          }
                        </td>
                      }
                      <td></td>
                    </tr>
                    <tr>
                      <td class="sticky-col">
                        <div class="field-label">Contact Distribution Chat</div>
                        <div class="field-description">Percent of Total Monthly Contact Volume</div>
                      </td>
                      @for (year of years; track year) {
                        <td>
                          @if (chatEditMode()) {
                            <input
                              nz-input
                              [(ngModel)]="chatArrayData.contactDistribution[year]"
                              class="table-input"
                            />
                          } @else {
                            <span>{{ chatArrayData.contactDistribution[year] }}</span>
                          }
                        </td>
                      }
                      <td></td>
                    </tr>
                    <tr>
                      <td class="sticky-col">
                        <div class="field-label">AHT Chat</div>
                        <div class="field-description">Average Handle Time (Minutes)</div>
                      </td>
                      @for (year of years; track year) {
                        <td>
                          @if (chatEditMode()) {
                            <input
                              nz-input
                              [(ngModel)]="chatArrayData.aht[year]"
                              class="table-input"
                            />
                          } @else {
                            <span>{{ chatArrayData.aht[year] }}</span>
                          }
                        </td>
                      }
                      <td></td>
                    </tr>
                    <tr class="calculated-row">
                      <td class="sticky-col">
                        <div class="field-label">
                          L1 Agent Hours Effort Chat
                          <i nz-icon nzType="info-circle" nzTheme="outline"></i>
                        </div>
                        <div class="field-description">L1 SD Service Hours per Month</div>
                      </td>
                      @for (year of years; track year) {
                        <td>{{ calculateAgentHours('chat', year) }}</td>
                      }
                      <td></td>
                    </tr>
                    <tr class="calculated-row">
                      <td class="sticky-col">
                        <div class="field-label">L1 Agent Count Estimate Chat</div>
                        <div class="field-description">Erlang Calculation (POC ESTIMATED) per Month</div>
                      </td>
                      @for (year of years; track year) {
                        <td>{{ calculateAgentCount('chat', year) }}</td>
                      }
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Portal Channel Requirements -->
            <div class="section-card">
              <div class="section-header">
                <h3>Portal Channel Requirements</h3>
                <button nz-button nzType="text" (click)="portalEditMode.set(!portalEditMode())">
                  <i nz-icon nzType="edit" nzTheme="outline"></i>
                </button>
              </div>

              <table class="requirements-table">
                <tbody>
                  <tr>
                    <td>SLA Portal</td>
                    <td>
                      @if (portalEditMode()) {
                        <input nz-input [(ngModel)]="portalRequirements.sla" />
                      } @else {
                        {{ portalRequirements.sla }}
                      }
                    </td>
                  </tr>
                  <tr>
                    <td>Hours of Support (Coverage) Portal</td>
                    <td>
                      @if (portalEditMode()) {
                        <input nz-input [(ngModel)]="portalRequirements.hoursOfSupport" />
                      } @else {
                        {{ portalRequirements.hoursOfSupport }}
                      }
                    </td>
                  </tr>
                  <tr>
                    <td>Callbacks Portal</td>
                    <td>
                      @if (portalEditMode()) {
                        <input nz-input [(ngModel)]="portalRequirements.callbacks" />
                      } @else {
                        {{ portalRequirements.callbacks }}
                      }
                    </td>
                  </tr>
                </tbody>
              </table>

              <div class="data-table-wrapper">
                <table class="data-table">
                  <thead>
                    <tr>
                      <th class="sticky-col"></th>
                      @for (year of years; track year) {
                        <th>{{ year }}</th>
                      }
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="sticky-col">
                        <div class="field-label">Contact Volume Portal</div>
                        <div class="field-description">Portal / Web Contacts per Month</div>
                      </td>
                      @for (year of years; track year) {
                        <td>
                          @if (portalEditMode()) {
                            <input
                              nz-input
                              [(ngModel)]="portalArrayData.contactVolume[year]"
                              class="table-input"
                            />
                          } @else {
                            <span>{{ portalArrayData.contactVolume[year] }}</span>
                          }
                        </td>
                      }
                      <td></td>
                    </tr>
                    <tr>
                      <td class="sticky-col">
                        <div class="field-label">Contact Distribution Portal</div>
                        <div class="field-description">Percent of Total Monthly Contact Volume</div>
                      </td>
                      @for (year of years; track year) {
                        <td>
                          @if (portalEditMode()) {
                            <input
                              nz-input
                              [(ngModel)]="portalArrayData.contactDistribution[year]"
                              class="table-input"
                            />
                          } @else {
                            <span>{{ portalArrayData.contactDistribution[year] }}</span>
                          }
                        </td>
                      }
                      <td></td>
                    </tr>
                    <tr>
                      <td class="sticky-col">
                        <div class="field-label">AHT Portal</div>
                        <div class="field-description">Average Handle Time (Minutes)</div>
                      </td>
                      @for (year of years; track year) {
                        <td>
                          @if (portalEditMode()) {
                            <input
                              nz-input
                              [(ngModel)]="portalArrayData.aht[year]"
                              class="table-input"
                            />
                          } @else {
                            <span>{{ portalArrayData.aht[year] }}</span>
                          }
                        </td>
                      }
                      <td></td>
                    </tr>
                    <tr class="calculated-row">
                      <td class="sticky-col">
                        <div class="field-label">
                          L1 Agent Hours Effort Portal
                          <i nz-icon nzType="info-circle" nzTheme="outline"></i>
                        </div>
                        <div class="field-description">L1 SD Service Hours per Month</div>
                      </td>
                      @for (year of years; track year) {
                        <td>{{ calculateAgentHours('portal', year) }}</td>
                      }
                      <td></td>
                    </tr>
                    <tr class="calculated-row">
                      <td class="sticky-col">
                        <div class="field-label">L1 Agent Count Estimate Portal</div>
                        <div class="field-description">Calculated Hours per Month (Non-Erlang)</div>
                      </td>
                      @for (year of years; track year) {
                        <td>{{ calculateAgentCount('portal', year) }}</td>
                      }
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Text Items Section -->
            <div class="section-card">
              <div class="section-header-simple">
                <h3>Text Items</h3>
              </div>
              <table class="form-table">
                <tbody>
                  <tr>
                    <td class="checkbox-col"></td>
                    <td>Read only text item - not selectable</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td class="checkbox-col">
                      <label nz-checkbox [(ngModel)]="textGroup.readOnlySelectable"></label>
                    </td>
                    <td>Read only text item - selectable</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td class="checkbox-col">
                      <label nz-checkbox></label>
                    </td>
                    <td>Required text item - editable <span class="required">*</span></td>
                    <td>
                      <input nz-input [(ngModel)]="textGroup.requiredText" />
                    </td>
                  </tr>
                  <tr>
                    <td class="checkbox-col">
                      <label nz-checkbox [(ngModel)]="textGroup.recommendedText"></label>
                    </td>
                    <td>
                      Recommended text item
                      <span class="recommended">(Recommended)</span>
                      <span class="required">*</span>
                    </td>
                    <td>
                      <input nz-input [(ngModel)]="textGroup.requiredText" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Label Item Group -->
            <div class="section-card">
              <div class="section-header-simple">
                <h3>Label Item group</h3>
              </div>
              <table class="form-table">
                <tbody>
                  <tr>
                    <td class="checkbox-col">
                      <label nz-checkbox [(ngModel)]="labelGroup.selected"></label>
                    </td>
                    <td>New Label Item - Selected</td>
                  </tr>
                  <tr>
                    <td class="checkbox-col">
                      <label nz-checkbox [(ngModel)]="labelGroup.deselected"></label>
                    </td>
                    <td>New Label Item - Deselected</td>
                  </tr>
                  <tr>
                    <td class="checkbox-col"></td>
                    <td>New Label Item - Read Only</td>
                  </tr>
                  <tr>
                    <td class="checkbox-col">
                      <label nz-checkbox [ngModel]="true" [nzDisabled]="true"></label>
                    </td>
                    <td>New Label Item Read only - Checked</td>
                  </tr>
                  <tr>
                    <td class="checkbox-col">
                      <label nz-checkbox [(ngModel)]="labelGroup.recommended"></label>
                    </td>
                    <td>New Label Item - Recommended</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Choice Group Items -->
            <div class="section-card">
              <div class="section-header-simple">
                <h3>Choice Group Items</h3>
              </div>
              <table class="form-table">
                <tbody>
                  <tr>
                    <td class="checkbox-col">
                      <label nz-checkbox></label>
                    </td>
                    <td>New Choice Group Item</td>
                    <td>
                      <nz-select [(ngModel)]="choiceGroup.normal" class="full-width">
                        <nz-option nzValue="12 months" nzLabel="12 months"></nz-option>
                        <nz-option nzValue="24 months" nzLabel="24 months"></nz-option>
                        <nz-option nzValue="36 months" nzLabel="36 months"></nz-option>
                      </nz-select>
                    </td>
                  </tr>
                  <tr>
                    <td class="checkbox-col"></td>
                    <td>New Choice Group Item - read only</td>
                    <td>{{ choiceGroup.readOnly }}</td>
                  </tr>
                  <tr>
                    <td class="checkbox-col">
                      <label nz-checkbox [ngModel]="false"></label>
                    </td>
                    <td>New Choice Group Item - required <span class="required">*</span></td>
                    <td>
                      <nz-select [(ngModel)]="choiceGroup.required" class="full-width">
                        <nz-option nzValue="12 months" nzLabel="12 months"></nz-option>
                        <nz-option nzValue="24 months" nzLabel="24 months"></nz-option>
                        <nz-option nzValue="36 months" nzLabel="36 months"></nz-option>
                      </nz-select>
                    </td>
                  </tr>
                  <tr>
                    <td class="checkbox-col">
                      <label nz-checkbox></label>
                    </td>
                    <td>New Choice Group Item - recommended</td>
                    <td>
                      <nz-select [(ngModel)]="choiceGroup.recommended" class="full-width">
                        <nz-option nzValue="12 months" nzLabel="12 months"></nz-option>
                        <nz-option nzValue="24 months" nzLabel="24 months"></nz-option>
                        <nz-option nzValue="36 months" nzLabel="36 months"></nz-option>
                      </nz-select>
                    </td>
                  </tr>
                  <tr>
                    <td class="checkbox-col">
                      <label nz-checkbox></label>
                    </td>
                    <td>New Choice Group Item - no item selected</td>
                    <td>
                      <nz-select [(ngModel)]="choiceGroup.noSelection" nzPlaceHolder="Select the term" class="full-width">
                        <nz-option nzValue="12 months" nzLabel="12 months"></nz-option>
                        <nz-option nzValue="24 months" nzLabel="24 months"></nz-option>
                        <nz-option nzValue="36 months" nzLabel="36 months"></nz-option>
                      </nz-select>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Quantity Item Group -->
            <div class="section-card">
              <div class="section-header-simple">
                <h3>Quantity item group</h3>
              </div>
              <table class="form-table">
                <tbody>
                  <tr>
                    <td class="checkbox-col">
                      <label nz-checkbox></label>
                    </td>
                    <td>New Quantity Item</td>
                    <td>
                      <div class="quantity-control">
                        <nz-input-number
                          [(ngModel)]="quantityGroup.normal"
                          [nzMin]="1"
                          [nzStep]="1"
                        ></nz-input-number>
                        <span class="unit">a unit</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="checkbox-col">
                      <label nz-checkbox></label>
                    </td>
                    <td>New Quantity Item Required <span class="required">*</span></td>
                    <td>
                      <div class="quantity-control">
                        <nz-input-number
                          [(ngModel)]="quantityGroup.required"
                          [nzMin]="1"
                          [nzStep]="1"
                        ></nz-input-number>
                        <span class="unit">a unit</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="checkbox-col"></td>
                    <td>New Quantity Item Read Only</td>
                    <td>
                      <span>1 <span class="unit">a unit</span></span>
                    </td>
                  </tr>
                  <tr>
                    <td class="checkbox-col"></td>
                    <td>New Quantity Item Read Only Required <span class="required">*</span></td>
                    <td>
                      <span>1 <span class="unit">a unit</span></span>
                    </td>
                  </tr>
                  <tr>
                    <td class="checkbox-col">
                      <label nz-checkbox></label>
                    </td>
                    <td>New Quantity Item Recommended <span class="recommended">(Recommended)</span></td>
                    <td>
                      <div class="quantity-control">
                        <nz-input-number
                          [(ngModel)]="quantityGroup.recommended"
                          [nzMin]="1"
                          [nzStep]="1"
                        ></nz-input-number>
                        <span class="unit">a unit</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="checkbox-col"></td>
                    <td>New Quantity Item Recommended Read Only <span class="recommended">(Recommended)</span></td>
                    <td>
                      <span>1 <span class="unit">a unit</span></span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Right Side - Summary Panel -->
          <div class="right-panel">
            <div class="summary-panel">
              <div class="summary-header">
                <div>PRODUCT SUMMARY</div>
              </div>
              <div class="summary-content">
                <div class="price-label">TOTAL PRICE</div>
                <div class="price-period">Monthly</div>
                <div class="price-amount">$96,600.00</div>

                <div class="summary-details">
                  <div>SLA Chat: {{ chatRequirements.sla }}</div>
                  <div>Hours of Support (Coverage) Chat: {{ chatRequirements.hoursOfSupport }}</div>
                  <div>Callbacks Chat: {{ chatRequirements.callbacks }}</div>
                  <div>SLA Portal: {{ portalRequirements.sla }}</div>
                  <div>Hours of Support (Coverage) Portal: {{ portalRequirements.hoursOfSupport }}</div>
                  <div>Callbacks Portal: {{ portalRequirements.callbacks }}</div>
                </div>

                <div class="service-details">
                  <div>IWS Service Desk - Chat Channel - English / Budapest: 1500 Chat Contacts per Month</div>
                  <div>IWS Service Desk - Portal Channel - English / Budapest: 1700 Portal Contacts per Month</div>
                </div>

                <button nz-button nzType="primary" class="full-width">Rule Traces</button>
              </div>

              <div class="summary-header">
                <div>SALES GUIDANCE</div>
              </div>

              <div class="summary-content">
                <div class="guidance-details">
                  <div class="guidance-title">Market Based Pricing Location (as of 03/Jul/2025)</div>
                  <div>Dutch / Budapest</div>
                  <div>English / Budapest</div>
                  <div>French / Budapest</div>
                  <div>German / Budapest</div>
                  <div>Italian / Budapest</div>
                  <div>Polish / Budapest</div>
                  <div>Portuguese / Budapest</div>
                  <div>Russian / Budapest</div>
                  <div>Translation / Budapest</div>
                  <div>English / India</div>
                  <div>Translation / India</div>
                  <div>English / Manila</div>
                  <div>Translation / Manila</div>
                  <div>English / Salt Lake City</div>
                  <div>Translation / Salt Lake City</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </ng-container>
    </nz-modal>
  `,
  styles: [`
    /* Modal Header */
    .modal-header {
      background-color: #f8f9fa;
      border-bottom: 1px solid #e5e8ec;
      padding: 8px 16px;
    }

    .header-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .breadcrumb-section {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .breadcrumb-section h3 {
      font-family: 'Open Sans', sans-serif;
      font-size: 14px;
      font-weight: 600;
      color: #2b3036;
      margin: 0;
    }

    .separator {
      color: #767d84;
    }

    .breadcrumb {
      display: flex;
      align-items: center;
      gap: 6px;
      font-family: 'Open Sans', sans-serif;
      font-size: 12px;
      color: #767d84;
    }

    .breadcrumb .active {
      color: #588f32;
    }

    /* Title and Actions Row */
    .title-actions-row {
      background-color: #ffffff;
      border-bottom: 1px solid #e5e8ec;
      padding: 8px 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .title-actions-row h4 {
      font-family: 'Open Sans', sans-serif;
      font-size: 14px;
      font-weight: 600;
      color: #2b3036;
      margin: 0;
    }

    .actions {
      display: flex;
      gap: 8px;
    }

    /* Modal Content */
    .modal-content {
      flex: 1;
      overflow: auto;
      background-color: #FAFBFC;
    }

    .content-layout {
      display: flex;
      gap: 24px;
      padding: 24px;
      background-color: #FAFBFC;
    }

    .left-panel {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 24px;
      overflow-x: auto;
    }

    .right-panel {
      width: 320px;
      flex-shrink: 0;
    }

    /* Section Card */
    .section-card {
      background-color: #ffffff;
      border: 1px solid #e5e8ec;
      border-radius: 4px;
      overflow: hidden;
    }

    .section-header {
      background-color: #f8f9fa;
      padding: 12px 16px;
      border-bottom: 1px solid #e5e8ec;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .section-header h3 {
      font-family: 'Open Sans', sans-serif;
      font-size: 14px;
      font-weight: 600;
      color: #2b3036;
      margin: 0;
    }

    .section-header-simple {
      background-color: #f8f9fa;
      padding: 12px 16px;
      border-bottom: 1px solid #e5e8ec;
    }

    .section-header-simple h3 {
      font-family: 'Open Sans', sans-serif;
      font-size: 12px;
      font-weight: 600;
      color: #2b3036;
      margin: 0;
    }

    .table-subheader {
      background-color: #f8f9fa;
      padding: 8px 16px;
      border-bottom: 1px solid #e5e8ec;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .table-subheader h4 {
      font-family: 'Open Sans', sans-serif;
      font-size: 12px;
      font-weight: 600;
      color: #2b3036;
      margin: 0;
    }

    /* Requirements Table */
    .requirements-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 12px;
    }

    .requirements-table tr {
      border-bottom: 1px solid #e5e8ec;
    }

    .requirements-table tr:last-child {
      border-bottom: none;
    }

    .requirements-table td {
      padding: 8px 16px;
      font-family: 'Open Sans', sans-serif;
      font-size: 12px;
    }

    .requirements-table td:first-child {
      color: #2b3036;
      font-weight: 400;
    }

    .requirements-table td:last-child {
      color: #767d84;
    }

    /* Data Table */
    .data-table-wrapper {
      overflow-x: auto;
    }

    .data-table {
      width: 100%;
      border-collapse: separate;
      border-spacing: 0;
      font-size: 12px;
    }

    .data-table thead {
      background-color: #f8f9fa;
    }

    .data-table th {
      padding: 8px 12px;
      font-family: 'Open Sans', sans-serif;
      font-size: 12px;
      font-weight: 600;
      color: #2b3036;
      text-align: center;
      min-width: 80px;
    }

    .data-table th.sticky-col {
      position: sticky;
      left: 0;
      z-index: 10;
      background-color: #f8f9fa;
      text-align: left;
      min-width: 200px;
      border-right: 1px solid #e5e8ec;
    }

    .data-table tbody tr {
      border-bottom: 1px solid #e5e8ec;
    }

    .data-table tbody tr.calculated-row {
      background-color: #f8f9fa;
    }

    .data-table td {
      padding: 8px 12px;
      text-align: center;
      font-family: 'Open Sans', sans-serif;
      font-size: 12px;
      color: #2b3036;
    }

    .data-table td.sticky-col {
      position: sticky;
      left: 0;
      z-index: 10;
      background-color: #ffffff;
      border-right: 1px solid #e5e8ec;
      text-align: left;
    }

    .data-table tbody tr.calculated-row td.sticky-col {
      background-color: #f8f9fa;
    }

    .field-label {
      font-weight: 500;
      color: #2b3036;
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .field-description {
      font-style: italic;
      color: #767d84;
      font-size: 10px;
      margin-top: 2px;
    }

    .table-input {
      width: 100%;
      text-align: center;
      font-size: 12px;
    }

    /* Form Table */
    .form-table {
      width: 100%;
      table-layout: fixed;
      border-collapse: collapse;
    }

    .form-table tr {
      border-bottom: 1px solid #e5e8ec;
    }

    .form-table tr:hover {
      background-color: #f8f9fa;
    }

    .form-table td {
      padding: 8px 12px;
      font-family: 'Open Sans', sans-serif;
      font-size: 12px;
      color: #2b3036;
    }

    .form-table td.checkbox-col {
      width: 40px;
    }

    .form-table td:nth-child(2) {
      width: 50%;
    }

    .form-table td:nth-child(3) {
      width: 50%;
      color: #767d84;
    }

    .required {
      color: #ef4444;
    }

    .recommended {
      color: #588f32;
    }

    .unit {
      color: #767d84;
      font-size: 12px;
      margin-left: 8px;
    }

    .quantity-control {
      display: flex;
      align-items: center;
    }

    /* Summary Panel */
    .summary-panel {
      background-color: #ffffff;
      border: 1px solid #e5e8ec;
      border-radius: 4px;
      overflow: hidden;
      position: sticky;
      top: 0;
    }

    .summary-header {
      background-color: #f8f9fa;
      padding: 12px 16px;
      border-bottom: 1px solid #e5e8ec;
      font-family: 'Open Sans', sans-serif;
      font-size: 12px;
      font-weight: 600;
      color: #2b3036;
    }

    .summary-content {
      padding: 16px;
    }

    .price-label {
      font-family: 'Open Sans', sans-serif;
      font-size: 12px;
      color: #767d84;
      margin-bottom: 8px;
    }

    .price-period {
      font-family: 'Open Sans', sans-serif;
      font-size: 12px;
      color: #767d84;
      margin-bottom: 12px;
    }

    .price-amount {
      font-family: 'Open Sans', sans-serif;
      font-size: 28px;
      font-weight: 700;
      color: #2b3036;
      text-align: right;
      margin-bottom: 24px;
    }

    .summary-details {
      font-family: 'Open Sans', sans-serif;
      font-size: 12px;
      color: #767d84;
      line-height: 1.6;
      padding-bottom: 16px;
      border-bottom: 1px solid #e5e8ec;
      margin-bottom: 16px;
    }

    .summary-details div {
      margin-bottom: 4px;
    }

    .service-details {
      font-family: 'Open Sans', sans-serif;
      font-size: 12px;
      color: #767d84;
      line-height: 1.6;
      margin-bottom: 16px;
    }

    .service-details div {
      margin-bottom: 4px;
    }

    .guidance-details {
      font-family: 'Open Sans', sans-serif;
      font-size: 12px;
      color: #767d84;
      line-height: 1.6;
    }

    .guidance-details div {
      margin-bottom: 4px;
    }

    .guidance-title {
      color: #2b3036;
      font-weight: 500;
      margin-bottom: 8px;
    }

    .full-width {
      width: 100%;
    }

    /* ========================================
       ServiceAnt Theme CSS Custom Properties
       Used for component-specific layout styling.
       ng-zorro component styles are now handled
       by the ServiceAnt theme (ng-zorro-antd.serviceant.less)
       ======================================== */

    /* CSS Custom Properties for theme colors */
    :host {
      --sp-primary: #74ba54;
      --sp-primary-hover: #588f32;
      --sp-text-primary: #2b3036;
      --sp-text-secondary: #767d84;
      --sp-border-light: #e5e8ec;
      --sp-border-input: #cdd1d5;
      --sp-surface-bg: #FAFBFC;
      --sp-surface-overlay: #f8f9fa;
      --sp-surface-canvas: #ffffff;
      --sp-radius-sm: 4px;
      --sp-radius-md: 8px;
    }

    /* Modal container - remove default body padding */
    :host ::ng-deep .ant-modal-body {
      padding: 0 !important;
    }

    /* Scrollbar styling */
    :host ::ng-deep ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }

    :host ::ng-deep ::-webkit-scrollbar-track {
      background: var(--sp-surface-overlay);
      border-radius: var(--sp-radius-sm);
    }

    :host ::ng-deep ::-webkit-scrollbar-thumb {
      background: var(--sp-border-input);
      border-radius: var(--sp-radius-sm);
    }

    :host ::ng-deep ::-webkit-scrollbar-thumb:hover {
      background: var(--sp-text-secondary);
    }

    /* Focus visible outlines */
    :host ::ng-deep *:focus-visible {
      outline: 2px solid var(--sp-primary);
      outline-offset: 2px;
    }
  `]
})
export class ConfiguratorWizardModalComponent {
  visible = input.required<boolean>();
  visibleChange = output<boolean>();

  chatEditMode = signal(false);
  portalEditMode = signal(false);

  years = ['H1', 'H2', 'Y2', 'Y3', 'Y4', 'Y5', 'Y6', 'Y7', 'Y8', 'Y9', 'Y10'];

  chatArrayData: ChannelData = {
    contactVolume: { H1: '1,500', H2: '1,500', Y2: '1,500', Y3: '1,500', Y4: '1,500', Y5: '1,500', Y6: '1,500', Y7: '1,500', Y8: '1,500', Y9: '1,500', Y10: '1,500' },
    contactDistribution: { H1: '15.00 %', H2: '15.00 %', Y2: '15.00 %', Y3: '15.00 %', Y4: '15.00 %', Y5: '15.00 %', Y6: '15.00 %', Y7: '15.00 %', Y8: '15.00 %', Y9: '15.00 %', Y10: '15.00 %' },
    aht: { H1: '8.00', H2: '8.00', Y2: '8.00', Y3: '8.00', Y4: '8.00', Y5: '8.00', Y6: '8.00', Y7: '8.00', Y8: '8.00', Y9: '8.00', Y10: '8.00' }
  };

  portalArrayData: ChannelData = {
    contactVolume: { H1: '1,700', H2: '1,700', Y2: '1,700', Y3: '1,700', Y4: '1,700', Y5: '1,700', Y6: '1,700', Y7: '1,700', Y8: '1,700', Y9: '1,700', Y10: '1,700' },
    contactDistribution: { H1: '17.00 %', H2: '17.00 %', Y2: '17.00 %', Y3: '17.00 %', Y4: '17.00 %', Y5: '17.00 %', Y6: '17.00 %', Y7: '17.00 %', Y8: '17.00 %', Y9: '17.00 %', Y10: '17.00 %' },
    aht: { H1: '12.00', H2: '12.00', Y2: '12.00', Y3: '12.00', Y4: '12.00', Y5: '12.00', Y6: '12.00', Y7: '12.00', Y8: '12.00', Y9: '12.00', Y10: '12.00' }
  };

  textGroup = {
    readOnlySelectable: false,
    requiredText: 'Some text',
    recommendedText: false
  };

  labelGroup = {
    selected: false,
    deselected: false,
    recommended: false
  };

  choiceGroup = {
    normal: '12 months',
    readOnly: '12 months',
    required: '12 months',
    recommended: '12 months',
    noSelection: ''
  };

  quantityGroup = {
    normal: 1,
    required: 1,
    recommended: 1
  };

  chatRequirements = {
    sla: '85% in 60 Seconds',
    hoursOfSupport: '5x12',
    callbacks: '10% (Unisys Strategy)',
    contactConcurrency: '2.00 Concurrent Contacts',
    translation: 'No Translation'
  };

  portalRequirements = {
    sla: '90% in 4 Hours',
    hoursOfSupport: '5x12',
    callbacks: '10% (Unisys Strategy)'
  };

  handleClose(): void {
    this.visibleChange.emit(false);
  }

  onVisibleChange(visible: boolean): void {
    this.visibleChange.emit(visible);
  }

  calculateAgentHours(section: 'chat' | 'portal', yearKey: string): string {
    const data = section === 'chat' ? this.chatArrayData : this.portalArrayData;
    const contactVolume = parseFloat(data.contactVolume[yearKey].replace(/,/g, '')) || 0;
    const contactDistribution = parseFloat(data.contactDistribution[yearKey].replace(/[,%\s]/g, '')) / 100 || 0;
    const aht = parseFloat(data.aht[yearKey]) || 0;
    const agentHours = (contactVolume * contactDistribution * aht) / 60;
    return agentHours.toFixed(2);
  }

  calculateAgentCount(section: 'chat' | 'portal', yearKey: string): string {
    const agentHours = parseFloat(this.calculateAgentHours(section, yearKey)) || 0;
    const workingHoursPerAgent = 147;
    const agentCount = agentHours / workingHoursPerAgent;
    return agentCount.toFixed(2);
  }
}
