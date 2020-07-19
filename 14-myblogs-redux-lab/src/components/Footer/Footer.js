/**
 * THIS HEADER SHOULD BE KEPT INTACT IN ALL CODE DERIVATIVES AND MODIFICATIONS.
 * 
 * This file provided by IPT is for non-commercial testing and evaluation
 * purposes only. IPT reserves all rights not expressly granted.
 *  
 * The security implementation provided is DEMO only and is NOT intended for production purposes.
 * It is exclusively your responsisbility to seek advice from security professionals 
 * in order to secure the REST API implementation properly.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * IPT BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import React from 'react';
import './Nav.css';

export default function Footer() {
  return (
    <footer className="page-footer orange">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Company Bio</h5>
            <p className="grey-text text-lighten-4">
              We are a team of college students working on this project like
              it's our full time job. Any amount would help support and continue
              development on this project and is greatly appreciated.
            </p>
          </div>
          <div className="col l3 s12">
            <h5 className="white-text">Settings</h5>
            <ul>
              <li>
                <a className="white-text" href="#!">
                  Link 1
                </a>
              </li>
              <li>
                <a className="white-text" href="#!">
                  Link 2
                </a>
              </li>
              <li>
                <a className="white-text" href="#!">
                  Link 3
                </a>
              </li>
              <li>
                <a className="white-text" href="#!">
                  Link 4
                </a>
              </li>
            </ul>
          </div>
          <div className="col l3 s12">
            <h5 className="white-text">Connect</h5>
            <ul>
              <li>
                <a className="white-text" href="#!">
                  Link 1
                </a>
              </li>
              <li>
                <a className="white-text" href="#!">
                  Link 2
                </a>
              </li>
              <li>
                <a className="white-text" href="#!">
                  Link 3
                </a>
              </li>
              <li>
                <a className="white-text" href="#!">
                  Link 4
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          Made by{' '}
          <a
            className="orange-text text-lighten-3"
            href="https://github.com/iproduct"
          >
            Trayan Iliev
          </a>
        </div>
      </div>
    </footer>
  );
}
