import { ACLCanType, ACLType } from './acl.type';
export declare class PixelmonACLConfig {
    /**
     * 路由守卫失败后跳转，默认：`/403`
     */
    guard_url?: string;
    /**
     * `can` 执行前回调
     */
    preCan?: ((roleOrAbility: ACLCanType) => ACLType | null) | null;
}
